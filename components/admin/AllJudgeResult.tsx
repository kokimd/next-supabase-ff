import { FC, useEffect, useState } from 'react';
import { Box, Select, Table } from '@mantine/core';
import { Th } from '../Table/Th';
import { useGetWindowSize } from '../util/useGetWindowSize';

import { useFormatJudgments } from '../../hooks/useFormatJudgments';
import { tableDataType, useSortArray } from '../../hooks/util/useSortArray';

export const AllJudgeResult: FC = () => {
  const { width } = useGetWindowSize();
  const [value, setValue] = useState<string>('1');
  const [judgments] = useFormatJudgments();
  const { sort } = useSortArray();
  const [data, setData] = useState<tableDataType[]>();
  const [update, setUpdate] = useState<boolean>(false);

  useEffect(() => {
    if (judgments) {
      let newData: any[] = [];
      switch (value) {
        case '2':
          newData = sort.byCuteNess(data!);
          break;
        case '3':
          newData = sort.byFun(data!);
          break;
        case '4':
          newData = sort.byAmazing(data!);
          break;
        case '5':
          newData = sort.bySum(data!);
          break;
        default:
          newData = sort.byOrder(data!);
          console.log(newData);
          break;
      }
      setUpdate(!update);
      setData(newData);
    }
  }, [value]);

  useEffect(() => {
    setData(judgments);
  }, [judgments]);

  const rows = data?.map((element, index) => (
    <tr key={index}>
      <td>{element.order}</td>
      <td>{width > 550 ? element.name : element.name?.substring(0, 5)}</td>
      <td>{element.cuteNess}</td>
      <td>{element.fun}</td>
      <td>{element.amazing}</td>
      <td>{element.sum}</td>
    </tr>
  ));

  return (
    <Box className='rounded-md bg-white p-4 md:p-8' mx='auto'>
      <Box className='lg:3/5 mt-4 w-full md:w-1/2'>
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
          // @ts-ignore
          onChange={setValue}
        />
      </Box>
      <Table striped className='mt-12'>
        <thead className=''>
          <tr>
            <Th type='default'>No</Th>
            <Th type='PC'>ユーザー</Th>
            <Th type='SP'>ユ</Th>
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
