import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useStore from '../../utils/store';

export const useValidateSession = () => {
  const router = useRouter();
  const { pathname, push } = router;
  const session = useStore((state) => state.session);
  const standBy = useStore((state) => state.standBy);

  const pushToLogin = () => {
    if (!session && standBy) push('/login');
  };

  const pushToHome = () => {
    if (session?.user?.email === 'admin01@example.com' && pathname)
      push('/admin');
    if (session && pathname === '/login') push('/');
  };

  useEffect(() => {
    pushToHome();
  }, [session]);

  return { pushToLogin };
};
