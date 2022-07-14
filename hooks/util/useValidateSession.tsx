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
    if (session && pathname === '/login') push('/');
  };

  const pushToHomeAdmin = () => {
    if (session?.user?.email === 'admin01@example.com' && pathname === 'login')
      push('/admin');
  };

  const protect = () => {
    if (
      (session?.user?.email !== 'admin01@example.com' &&
        pathname === '/admin') ||
      pathname === '/admin/log' ||
      pathname === '/admin/participants'
    )
      push('/');
  };

  useEffect(() => {
    if (session?.user?.email === 'admin01@example.com') {
      pushToHomeAdmin();
      if (pathname === '/') push('/admin');
    } else {
      pushToHome();
      protect();
    }
  }, [session]);

  return { pushToLogin };
};
