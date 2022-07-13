import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import { supabase } from '../utils/supabase';

export const useMutateJudge = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const createJudgeMutation = useMutation(
    async (payload: any) => {
      const { data, error } = await supabase.from('judgments').insert(payload);
      if (error) throw new Error(error.message);
      return data;
    },
    {
      onSuccess: (res) => {
        queryClient.setQueryData(['judgments'], res[0]);
        router.reload();
      },
      onError: (err: any) => {
        alert(err.message);
      },
    }
  );

  return { createJudgeMutation };
};
