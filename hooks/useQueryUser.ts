import { useQuery } from 'react-query';
import useStore from '../utils/store';
import { supabase } from '../utils/supabase';

type User = {
  name: string;
  role: string;
};

export const useQueryUser = () => {
  const session = useStore((state) => state.session);

  const getUser = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', session?.user?.id)
      .single();

    if (error) throw new Error(`${error.message}: ${error.details}`);

    return data;
  };

  return useQuery<User>({
    queryFn: getUser,
    queryKey: ['user'],
    staleTime: Infinity,
  });
};
