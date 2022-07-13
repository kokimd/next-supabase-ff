import { useQuery } from 'react-query';
import { supabase } from '../utils/supabase';
import { JudgeType } from '../utils/types';

export const useQueryJudgments = () => {
  const getAllJudgments = async () => {
    const { data, error } = await supabase
      .from('judgments')
      .select(
        `*,
      participants:participant_id ( name,order ),
      profiles:profile_id(name)
      `
      )
      .order('participant_id', { ascending: true });

    if (error) throw new Error(`${error.message}: ${error.details}`);

    return data;
  };

  return useQuery<JudgeType[]>({
    queryFn: getAllJudgments,
    queryKey: ['judgments'],
    staleTime: Infinity,
  });
};
