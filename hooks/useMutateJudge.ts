import { useRouter } from 'next/router';
import { useMutation, useQueryClient } from 'react-query';
import { supabase } from '../utils/supabase';
import { JudgeFormData } from '../utils/types';

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

  type UpdateJudgeFormData = JudgeFormData & {
    id: number;
  };

  const updateJudgeMutation = useMutation(
    async (payload: UpdateJudgeFormData) => {
      const { cuteNess, fun, amazing } = payload;
      const { error } = await supabase
        .from('judgments')
        .update({
          cuteNess,
          fun,
          amazing,
          sum: cuteNess + fun + amazing,
        })
        .eq('id', payload.id);
      if (error) {
        console.log(error.message);
      }
    },
    {
      onSuccess: (res: any, variables) => {
        queryClient.setQueryData(
          [`judgments${variables.participant_id}`],
          res[0]
        );
      },
    }
  );

  return { createJudgeMutation, updateJudgeMutation };
};
