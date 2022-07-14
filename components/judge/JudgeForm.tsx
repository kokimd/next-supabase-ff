import { FC, useEffect, useState } from 'react';
import { Box, Button, Group, Modal, NumberInput, Select } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { judgeSchema } from '../../utils/validationSchema';
import { useQueryParticipants } from '../../hooks/useQueryParticipants';
import { useQueryJudgedParticipants } from '../../hooks/useQueryJudgedParttcipants';
import { JudgeFormData } from '../../utils/types';

import { JudgeConfirm } from './JudgeConfirm';

export const JudgeForm: FC = () => {
  const [opened, setOpened] = useState(false);
  const { data: allParticipants } = useQueryParticipants();
  const { data: judgedParticipants } = useQueryJudgedParticipants();
  const [list, setList] = useState<number[]>([]);

  useEffect(() => {
    if (judgedParticipants) {
      const toArray = () => {
        return judgedParticipants?.map((data) => ({
          id: data.participant_id.id,
        }));
      };
      const judgedParticipantsArray: { id: number }[] = toArray();
      const data = judgedParticipantsArray.map((participant) => participant.id);
      setList(data);
    }
  }, [judgedParticipants]);

  const participantsData = allParticipants?.map((participant, index) => ({
    value: String(participant.id),
    label: participant.name,
  }));

  const selectData = participantsData || [
    { value: '1', label: '選択して下さい。' },
  ];

  const form = useForm<JudgeFormData>({
    schema: yupResolver(judgeSchema),
    initialValues: {
      participant_id: '',
      cuteNess: 0,
      fun: 0,
      amazing: 0,
    },
  });

  const onClick = () => {
    const alreadyJudged: Boolean = list.includes(
      Number(form.values.participant_id)
    );
    if (alreadyJudged) {
      alert('既に審査済みのユーザーです。');
    } else {
      setOpened(true);
    }
  };

  return (
    <Box className='rounded-md bg-white p-8' mx='auto'>
      <form
        className='mx-auto mt-8 flex w-full flex-col space-y-8 md:w-7/12'
        onSubmit={form.onSubmit(onClick)}
      >
        <Select
          styles={{ label: { fontWeight: 'bold', padding: '4px 0' } }}
          label='審査対象'
          placeholder='参加者を選択'
          required
          // @ts-ignore
          data={selectData}
          {...form.getInputProps('participant_id')}
        />
        <NumberInput
          styles={{ label: { fontWeight: 'bold', padding: '4px 0' } }}
          defaultValue={1}
          placeholder='可愛さ&amp;カッコよさ'
          label='可愛さ&amp;カッコよさ'
          required
          min={0}
          step={10}
          max={50}
          {...form.getInputProps('cuteNess')}
        />
        <NumberInput
          styles={{ label: { fontWeight: 'bold', padding: '4px 0' } }}
          defaultValue={1}
          placeholder='面白さ'
          label='面白さ'
          required
          min={0}
          step={10}
          max={50}
          {...form.getInputProps('fun')}
        />
        <NumberInput
          styles={{ label: { fontWeight: 'bold', padding: '4px 0' } }}
          defaultValue={0}
          placeholder='パフォーマンスの凄さ'
          label='パフォーマンスの凄さ'
          required
          min={0}
          step={10}
          max={50}
          {...form.getInputProps('amazing')}
        />
        <Group position='center' mt='md'>
          <Button type='submit'>送信する</Button>
        </Group>
        <Modal
          title='ご確認お願いしますわ'
          centered
          opened={opened}
          onClose={() => setOpened(false)}
          styles={{
            title: {
              fontWeight: 'bold',
              fontSize: '20px',
              margin: 'auto',
            },
          }}
        >
          <JudgeConfirm values={form.values} setOpened={setOpened} />
        </Modal>
      </form>
    </Box>
  );
};
