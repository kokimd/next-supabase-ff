import { useEffect, useState } from 'react';

export const useGetUserId = () => {
  const [userId, setUserId] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem('userInfo');
      // @ts-ignore
      setUserId(data);
    }
  }, []);

  return { userId };
};
