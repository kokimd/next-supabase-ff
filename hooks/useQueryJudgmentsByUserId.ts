import { useQuery } from 'react-query';
import useStore from '../utils/store';
import { supabase } from '../utils/supabase';

export const useQueryJudgmentsByUserId = () => {
  const session = useStore((state) => state.session);

  const getJudgmentsByUserId = async () => {
    const { data, error } = await supabase
      .from('judgments')
      .select(`*`)
      .eq('user_id', session?.user?.id);

    if (error) throw new Error(`${error.message}: ${error.details}`);

    return data;
  };

  return useQuery({
    queryFn: getJudgmentsByUserId,
    queryKey: [`judgments${session?.user?.id}`],
  });
};
