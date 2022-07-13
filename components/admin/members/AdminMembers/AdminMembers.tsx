import { Box, Button, Group } from '@mantine/core';
import { formList, useForm } from '@mantine/form';
import { FC, FormEvent } from 'react';
import { useArrayState } from '../../../../hooks/util/useArrayState';
import { AdminMemberForm } from '../AdminMemberForm';
import { showNotification } from '@mantine/notifications';
import { PlaylistAdd } from 'tabler-icons-react';
import { ParticipantType } from '../../../../utils/types';
import { useMutateParticipants } from '../../../../hooks/useMutateParticipants';
import { useQueryClient } from 'react-query';

export const AdminMembers: FC = () => {
  const queryClient = useQueryClient();
  const participants = queryClient.getQueryData<ParticipantType[]>([
    'participants',
  ]);
  console.log(participants, 'data');

  const { createParticipantMutation } = useMutateParticipants();

  const [membersState, setMembersState, editMembers] = // eslint-disable-line
    useArrayState<ParticipantType>(participants!);

  const memberForm = useForm({
    initialValues: { members: formList(membersState) },
  });

  const addMember = () => {
    editMembers.addArrayState({ order: membersState.length + 1, name: '' });
    memberForm.addListItem('members', {
      order: memberForm.values.members.length + 1,
      name: '',
    });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { members } = memberForm.values;

    const hasDuplicated = () => {
      const duplicatedFilter = members.filter(
        (member, index) =>
          members.findIndex((item) => item.order === member.order) === index
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
    createParticipantMutation.mutate(members);
  };

  return (
    <Box className=' rounded-md bg-white p-8' mx='auto'>
      <Group position='right'>
        <Button radius='xl' color='indigo' onClick={addMember}>
          <PlaylistAdd size={30} />
        </Button>
      </Group>
      <form onSubmit={onSubmit} className='mt-8 flex flex-col space-y-4'>
        {membersState.map((member, index) => (
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
