import { useQuery } from 'react-query';
import { supabase } from '../utils/supabase';
import { JudgeType } from '../utils/types';

export const useQueryJudgmentsByParticipant = (id?: number) => {
  const getJudgmentsByParticipant = async () => {
    const { data, error } = await supabase
      .from('judgments')
      .select(
        `*,
      participants:participant_id ( name,order ),
      profiles:profile_id(name)
      `
      )
      .eq('participant_id', id)
      .order('profile_id', { ascending: true });

    if (error) throw new Error(`${error.message}: ${error.details}`);

    return data;
  };

  return useQuery<JudgeType[]>({
    queryFn: getJudgmentsByParticipant,
    queryKey: [`judgments${id}`],
    staleTime: 1000,
  });
};
