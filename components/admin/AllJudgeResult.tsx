import { FC } from 'react';
import { Box, Select, Table } from '@mantine/core';
import { Th } from '../Table/Th';

export const AllJudgeResult: FC = () => {
  const elements = [
    {
      index: 1,
      name: 'assaaaa@Zeromus',
      cuteness: 10,
      fun: 30,
      amazing: 100,
      sum: 140,
    },
    {
      index: 2,
      name: 'sadsafafa@Chocobo',
      cuteness: 10,
      fun: 30,
      amazing: 100,
      sum: 140,
    },
    {
      index: 3,
      name: 'dadfafa@Tiamat',
      cuteness: 10,
      fun: 30,
      amazing: 100,
      sum: 140,
    },
    {
      index: 4,
      name: 'fafafsfa@aaaa',
      cuteness: 10,
      fun: 30,
      amazing: 100,
      sum: 140,
    },
    {
      index: 5,
      name: 'fasffafa@r43434',
      cuteness: 200,
      fun: 200,
      amazing: 200,
      sum: 600,
    },
  ];

  const rows = elements.map((element) => (
    <tr key={element.index}>
      <td>{element.index}</td>
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
          label='並び替え'
          placeholder='項目を選択'
          defaultValue={'1'}
          required
          data={[
            { value: '1', label: 'デフォルト' },
            { value: '2', label: '可愛さ&カッコよさ' },
            { value: '3', label: '面白さ' },
            { value: '4', label: 'パフォーマンスの凄さ' },
            { value: '5', label: '合計' },
          ]}
        />
      </Box>
      <Table striped className='mt-12'>
        <thead>
          <tr>
            <Th type='default'>No</Th>
            <Th type='default'>ユーザー</Th>
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
