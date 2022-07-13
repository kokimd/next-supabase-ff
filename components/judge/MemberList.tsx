import { FC } from 'react';
import { Box, Button, Group, LoadingOverlay, Table } from '@mantine/core';
import { useQueryParticipants } from '../../hooks/useQueryParticipants';
import { useRouter } from 'next/router';

export const MemberList: FC = () => {
  const router = useRouter();
  const { data: participants } = useQueryParticipants();

  const rows = participants?.map((element) => (
    <tr key={element.name}>
      <td>{element.order}</td>
      <td>{element.name}</td>
    </tr>
  ));

  return (
    <Box className='rounded-md bg-white p-8' mx='auto'>
      <LoadingOverlay visible={Boolean(!participants)} />
      <Group position='right' mb={12} className='hidden'>
        <Button onClick={() => router.push('admin/participant/edit')}>
          編集する
        </Button>
      </Group>
      <Table striped>
        <thead>
          <tr>
            <th>No. </th>
            <th>ユーザー</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Box>
  );
};
