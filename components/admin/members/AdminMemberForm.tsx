import { Box, Button, NumberInput, TextInput } from '@mantine/core';
import { FormList } from '@mantine/form';
import { UseFormReturnType } from '@mantine/form/lib/use-form';
import { FC, memo } from 'react';
import { Trash } from 'tabler-icons-react';
import { ParticipantType } from '../../../utils/types';

type Props = {
  labels?: ['参加者名', '順番'] | ['', ''] | undefined;
  index: number;
  onClick: () => void;
  form: UseFormReturnType<{
    members: FormList<ParticipantType>;
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
        {...form.getListInputProps('members', index, 'order')}
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
        <Trash size={22} />
      </Button>
    </Box>
  );
};

export const AdminMemberForm = memo(AdminMemberFormMemo);
