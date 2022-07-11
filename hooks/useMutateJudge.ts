import { useMutation, useQueryClient } from 'react-query';
import { supabase } from '../utils/supabase';

export const useMutateJudge = () => {
  const queryClient = useQueryClient();

  const createJudgeMutation = useMutation(
    async (payload: any) => {
      const { data, error } = await supabase.from('judgements').upsert(payload);
      if (error) throw new Error(error.message);
      return data;
    },
    {
      onSuccess: (res) => {
        queryClient.setQueryData(['judgements'], res[0]);
        alert('success');
      },
      onError: (err: any) => {
        alert(err.message);
      },
    }
  );

  return { createJudgeMutation };
};
