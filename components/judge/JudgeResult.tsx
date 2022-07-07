import { FC } from 'react';
import { Box, Select, Table } from '@mantine/core';
import { Th } from '../Table/Th';

export const JudgeResult: FC = () => {
  const elements = [
    {
      name: '審査員01',
      cuteness: 10,
      fun: 30,
      amazing: 100,
      sum: 140,
    },
    {
      name: '審査員02',
      cuteness: 10,
      fun: 30,
      amazing: 100,
      sum: 140,
    },
    {
      name: '審査員03',
      cuteness: 10,
      fun: 30,
      amazing: 100,
      sum: 140,
    },
    {
      name: '審査員04',
      cuteness: 10,
      fun: 30,
      amazing: 100,
      sum: 140,
    },
    {
      name: '審査員05',
      cuteness: 10,
      fun: 30,
      amazing: 100,
      sum: 140,
    },
  ];

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.name}</td>
      <td>{element.cuteness}</td>
      <td>{element.fun}</td>
      <td>{element.amazing}</td>
      <td>{element.sum}</td>
    </tr>
  ));
  return (
    <Box className='rounded-md bg-white p-8' mx='auto'>
      <Box
        className='lg:3/5 w-full md:w-1/2
      '
      >
        <Select
          styles={{
            label: { fontWeight: 'bold', padding: '4px 0' },
          }}
          label='ユーザー'
          placeholder='参加者を選択'
          required
          data={[
            { value: '1', label: '参加者1' },
            { value: '2', label: '参加者2' },
            { value: '3', label: '参加者3' },
            { value: '4', label: '参加者4' },
          ]}
        />
      </Box>
      <Table striped className='mt-12'>
        <thead>
          <tr>
            <Th type='default'>審査員</Th>
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
