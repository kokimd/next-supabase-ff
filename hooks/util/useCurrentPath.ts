import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useCurrentPath = (path: string) => {
  const pathname = useRouter().pathname;

  const [isMatch, setIsMatch] = useState(false);

  const checkPathname = () => {
    return pathname === path;
  };

  useEffect(() => {
    const check = checkPathname();
    setIsMatch(check);
  }, []);

  return { isMatch };
};
