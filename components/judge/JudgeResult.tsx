import { FC, useEffect, useState } from 'react';
import { Box, Select, Table } from '@mantine/core';
import { Th } from '../Table/Th';
import { useQueryJudgmentsByParticipant } from '../../hooks/useQueryJudgmentsByParticipant';
import { useQueryParticipants } from '../../hooks/useQueryParticipants';
import useStore from '../../utils/store';

export const JudgeResult: FC = () => {
  const [value, setValue] = useState<number>();
  const { data: judgments } = useQueryJudgmentsByParticipant(value);
  const { data: participants } = useQueryParticipants();
  const setJudgments = useStore((state) => state.setJudgments);

  useEffect(() => {
    if (judgments) {
      setJudgments(judgments);
    }
  }, [judgments]);

  const rows = judgments?.map((element, index) => (
    <tr key={index}>
      <td>{element.profiles?.name}</td>
      <td>{element.cuteNess}</td>
      <td>{element.fun}</td>
      <td>{element.amazing}</td>
      <td>{element.sum}</td>
    </tr>
  ));

  const participantsData = participants?.map((participant, index) => ({
    value: String(participant.id),
    label: participant.name,
  }));

  const selectData = participantsData || [
    { value: '1', label: '選択して下さい。' },
  ];
  return (
    <Box className='rounded-md bg-white p-4 md:p-8' mx='auto'>
      <Box className='lg:3/5 mt-4 w-full md:w-1/2'>
        <Select
          styles={{
            label: { fontWeight: 'bold', padding: '4px 0' },
          }}
          label='ユーザー'
          placeholder='参加者を選択'
          required
          data={selectData!}
          // @ts-ignore
          onChange={setValue}
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
