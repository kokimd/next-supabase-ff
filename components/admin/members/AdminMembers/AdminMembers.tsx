import { Box, Button, Group } from '@mantine/core';
import { formList, useForm } from '@mantine/form';
import { FC, FormEvent } from 'react';
import { useArrayState } from '../../../../hooks/util/useArrayState';
import { AdminMemberForm } from '../AdminMemberForm';
import { Member } from './types';
import { showNotification } from '@mantine/notifications';

const dummyData = [
  {
    index: 1,
    name: 'aaaaaaa@Zeromus',
  },
  {
    index: 2,
    name: 'aaaaaaa@Tiamat',
  },
  {
    index: 3,
    name: 'aaaaaaa@Chocobo',
  },
  {
    index: 4,
    name: 'aaaaaaa@AAAA',
  },
  {
    index: 5,
    name: 'aaaaaaa@BBBB',
  },
];

export const AdminMembers: FC = () => {
  const [membersState, setMembersState, editMembers] = // eslint-disable-line
    useArrayState<Member>(dummyData);

  const memberForm = useForm({
    initialValues: { members: formList(membersState) },
  });

  const addMember = () => {
    editMembers.addArrayState({ index: membersState.length + 1, name: '' });
    memberForm.addListItem('members', {
      index: memberForm.values.members.length + 1,
      name: '',
    });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { members } = memberForm.values;

    const hasDuplicated = () => {
      const duplicatedFilter = members.filter(
        (member, index) =>
          members.findIndex((item) => item.index === member.index) === index
      );
      return duplicatedFilter.length !== members.length;
    };

    if (hasDuplicated()) {
      alert('順番の重複は許せないですわ。');
      return;
    }

    showNotification({
      title: 'Success',
      message: '更新できましたわ。',
      autoClose: 3000,
    });
    console.log('state', members);
  };

  return (
    <Box className=' rounded-md bg-white p-8' mx='auto'>
      <Group position='right'>
        <Button radius='xl' color='indigo' onClick={addMember}>
          参加者を追加
        </Button>
      </Group>
      <form onSubmit={onSubmit} className='mt-8 flex flex-col space-y-4'>
        {memberForm.values.members.map((member, index) => (
          <AdminMemberForm
            labels={index === 0 ? ['参加者名', '順番'] : ['', '']}
            index={index}
            key={index}
            onClick={() => {
              memberForm.removeListItem('members', index);
            }}
            form={memberForm}
          />
        ))}
        <Group position='center'>
          <Button type='submit' className='mt-8'>
            更新する
          </Button>
        </Group>
      </form>
    </Box>
  );
};
