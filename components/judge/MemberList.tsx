import { FC } from 'react';
import { Box, Table } from '@mantine/core';

export const MemberList: FC = () => {
  const elements = [
    { number: 1, name: 'Carbon@Chocobo' },
    { number: 2, name: 'Nitrogen@Tiamat' },
    { number: 3, name: 'Yttrium@Zeromusu' },
    { number: 4, name: 'Barium@aaa' },
    { number: 5, name: 'Cerium@aaaa' },
  ];

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.number}</td>
      <td>{element.name}</td>
    </tr>
  ));
  return (
    <Box className='rounded-md bg-white p-8' mx='auto'>
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
