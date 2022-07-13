import { useMutation, useQueryClient } from 'react-query';
import { supabase } from '../utils/supabase';

export const useMutateParticipants = () => {
  const queryClient = useQueryClient();

  const createParticipantMutation = useMutation(
    async (participant: any) => {
      const { data, error } = await supabase
        .from('participants')
        .upsert(participant);
      if (error) throw new Error(error.message);
      return data;
    },
    {
      onSuccess: (res) => {
        queryClient.setQueryData(['participants'], res[0]);
        alert('success');
      },
      onError: (err: any) => {
        alert(err.message);
      },
    }
  );

  return { createParticipantMutation };
};
