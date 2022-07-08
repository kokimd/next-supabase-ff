import { Box, Button, NumberInput, TextInput } from '@mantine/core';
import { FormList } from '@mantine/form';
import { UseFormReturnType } from '@mantine/form/lib/use-form';
import { FC, memo } from 'react';
import { Member } from './AdminMembers/types';

type Props = {
  labels?: ['参加者名', '順番'] | ['', ''] | undefined;
  index: number;
  onClick: () => void;
  form: UseFormReturnType<{
    members: FormList<Member>;
  }>;
};
const AdminMemberFormMemo: FC<Props> = ({
  labels = [],
  index,
  onClick,
  form,
}) => {
  return (
    <Box className='flex items-end space-x-2'>
      <NumberInput
        label={labels[1]}
        className='w-16'
        min={1}
        {...form.getListInputProps('members', index, 'index')}
        required
      />
      <TextInput
        label={labels[0]}
        placeholder='character@Zeromus'
        className=' flex-1'
        {...form.getListInputProps('members', index, 'name')}
        required
      />

      <Button color='pink' type='button' onClick={onClick}>
        削除
      </Button>
    </Box>
  );
};

export const AdminMemberForm = memo(AdminMemberFormMemo);
