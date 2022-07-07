import { FC } from 'react';
import { Box, Table } from '@mantine/core';

export const MemberList: FC = () => {
  const elements = [
    { number: 1, world: 'Zeromus', name: 'Carbon' },
    { number: 2, world: 'Meteo', name: 'Nitrogen' },
    { number: 3, world: 'Alexander', name: 'Yttrium' },
    { number: 4, world: 'Chocobo', name: 'Barium' },
    { number: 5, world: 'Tiamat', name: 'Cerium' },
  ];

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.number}</td>
      <td>{element.world}</td>
      <td>{element.name}</td>
    </tr>
  ));
  return (
    <Box className='rounded-md bg-white p-8' mx='auto'>
      <Table striped>
        <thead>
          <tr>
            <th>No. </th>
            <th>ワールド</th>
            <th>ユーザー名</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Box>
  );
};
