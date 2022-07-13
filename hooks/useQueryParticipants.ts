import { useQuery } from 'react-query';
import { supabase } from '../utils/supabase';
import { ParticipantType } from '../utils/types';

export const useQueryParticipants = () => {
  const getAllParticipants = async () => {
    const { data, error } = await supabase
      .from('participants')
      .select('id,name,order')
      .order('order', { ascending: true });

    if (error) throw new Error(`${error.message}: ${error.details}`);

    return data;
  };

  return useQuery<ParticipantType[]>({
    queryFn: getAllParticipants,
    queryKey: ['participants'],
  });
};
