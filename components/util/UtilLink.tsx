import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { useCurrentPath } from '../../hooks/util/useCurrentPath';

type Props = {
  path: string;
  children: ReactNode;
};

export const UtilLink: FC<Props> = ({ path, children }) => {
  const { isMatch } = useCurrentPath(path);

  return (
    <Link href={path}>
      <a
        className={`${
          isMatch
            ? 'bg-white hover:bg-opacity-50'
            : 'bg-transparent hover:bg-white'
        } rounded-md px-4 py-2 text-base font-bold text-black no-underline md:px-8 md:text-lg`}
      >
        {children}
      </a>
    </Link>
  );
};
