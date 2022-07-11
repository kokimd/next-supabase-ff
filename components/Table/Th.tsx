import { FC, memo, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  type?: 'SP' | 'PC' | 'default';
};

const PCClasses = ['hidden md:table-cell'];
const SPClasses = ['sm:able-cell md:hidden'];

const ThMemo: FC<Props> = ({ children, type }) => {
  const className = [
    type === 'SP' && SPClasses,
    type === 'PC' && PCClasses,
  ].join(' ');
  return <th className={className}>{children}</th>;
};

export const Th = memo(ThMemo);
