import { Alert } from '@mantine/core';
import { FC, ReactNode } from 'react';
import { AlertCircle } from 'tabler-icons-react';

type Props = {
  children: ReactNode;
};

export const ErrorMessage: FC<Props> = ({ children }) => {
  return (
    <Alert icon={<AlertCircle size={16} />} title='Error' color='red'>
      {children}
    </Alert>
  );
};
