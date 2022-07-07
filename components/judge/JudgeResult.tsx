import { FC } from 'react';
import { Box, Table } from '@mantine/core';
import { Th } from '../Table/Th';

export const JudgeResult: FC = () => {
  const elements = [
    {
      number: 1,
      name: 'Carbon',
      cuteness: 10,
      fun: 30,
      amazing: 100,
      sum: 140,
    },
    {
      number: 2,
      name: 'Nitrogen',
      cuteness: 10,
      fun: 30,
      amazing: 100,
      sum: 140,
    },
    {
      number: 3,
      name: 'Yttrium',
      cuteness: 10,
      fun: 30,
      amazing: 100,
      sum: 140,
    },
    {
      number: 4,
      name: 'Barium',
      cuteness: 10,
      fun: 30,
      amazing: 100,
      sum: 140,
    },
    {
      number: 5,
      name: 'Cerium',
      cuteness: 10,
      fun: 30,
      amazing: 100,
      sum: 140,
    },
  ];

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.number}</td>
      <td>{element.name}</td>
      <td>{element.cuteness}</td>
      <td>{element.fun}</td>
      <td>{element.amazing}</td>
      <td>{element.sum}</td>
    </tr>
  ));
  return (
    <Box className='rounded-md bg-white p-8' mx='auto'>
      <Table striped>
        <thead>
          <tr>
            <Th type='default'>No. </Th>
            <Th type='PC'>ユーザー名</Th>
            <Th type='SP'>名</Th>
            <Th type='PC'>可愛さ&amp;カッコよさ</Th>
            <Th type='SP'>可</Th>
            <Th type='PC'>面白さ</Th>
            <Th type='SP'>面</Th>
            <Th type='PC'>パフォーマンスの凄さ</Th>
            <Th type='SP'>パ</Th>
            <Th type='PC'>合計</Th>
            <Th type='SP'>計</Th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Box>
  );
};
