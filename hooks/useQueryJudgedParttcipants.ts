import { useQuery } from 'react-query';
import useStore from '../utils/store';
import { supabase } from '../utils/supabase';

// 自分が審査済みのユーザーを取得する
export const useQueryJudgedParticipants = () => {
  const session = useStore((state) => state.session);

  const getJudged = async () => {
    const { data } = await supabase
      .from('judgments')
      .select(`participant_id (*)`)
      .eq('user_id', session?.user?.id);

    return data;
  };

  return useQuery({
    queryFn: getJudged,
    queryKey: [`JudgedParticipants${session?.user?.id}`],
  });
};
