import { Dispatch, FC, SetStateAction } from 'react';
import {
  Group,
  Paper,
  Text,
  Box,
  Space,
  Button,
  LoadingOverlay,
} from '@mantine/core';
import { useQueryParticipants } from '../../hooks/useQueryParticipants';
import { JudgeFormData } from '../../utils/types';
import { showNotification } from '@mantine/notifications';
import { useMutateJudge } from '../../hooks/useMutateJudge';
import useStore from '../../utils/store';
import { useGetUserId } from '../../hooks/util/useGetUserId';

type Props = {
  values: JudgeFormData;
  setOpened: Dispatch<SetStateAction<boolean>>;
};

export const JudgeConfirm: FC<Props> = ({ values, setOpened }) => {
  const session = useStore((state) => state.session);
  const { data: allParticipants } = useQueryParticipants();
  const { userId } = useGetUserId();
  const { createJudgeMutation } = useMutateJudge();

  const participant = allParticipants?.find(
    (data) => data.id === Number(values.participant_id)
  );

  const onSubmitJudge = () => {
    const { cuteNess, fun, amazing } = values;
    const payload: any = {
      ...values,
      sum: cuteNess + fun + amazing,
      user_id: session?.user?.id,
      participant_id: Number(values.participant_id),
      profile_id: userId,
    };
    console.log(payload);
    createJudgeMutation.mutate(payload);
    showNotification({
      title: 'Success',
      message: '更新できましたわ。',
      autoClose: 3000,
    });
  };

  return (
    <Paper>
      <LoadingOverlay visible={createJudgeMutation.isLoading} />
      <Group className='flex flex-col'>
        <Space h={12} />
        <Box className='flex w-9/12 flex-col'>
          <Text weight={700} size='sm'>
            ユーザー名
          </Text>
          <Text weight={500} size='md' mt={8} className='ml-auto'>
            {participant?.name}
          </Text>
        </Box>
        <Box className='flex w-9/12 flex-col'>
          <Text weight={700} size='sm'>
            かっこよさ・かわいさ
          </Text>
          <Text weight={500} size='md' mt={8} className='ml-auto'>
            {values.cuteNess} 点
          </Text>
        </Box>
        <Box className='flex w-9/12 flex-col'>
          <Text weight={700} size='sm'>
            面白さ
          </Text>
          <Text weight={500} size='md' mt={8} className='ml-auto'>
            {values.fun} 点
          </Text>
        </Box>
        <Box className='flex w-9/12 flex-col'>
          <Text weight={700} size='sm'>
            パフォーマンスの凄さ
          </Text>
          <Text weight={500} size='md' mt={8} className='ml-auto'>
            {values.amazing} 点
          </Text>
        </Box>
        <Box className='flex w-9/12 flex-col'>
          <Text weight={700} size='sm'>
            合計
          </Text>
          <Text weight={500} size='md' mt={8} className='ml-auto'>
            {values.cuteNess + values.fun + values.amazing} 点
          </Text>
        </Box>
        <Group>
          <Button color={'pink'} onClick={() => setOpened(false)}>
            戻る
          </Button>
          <Button onClick={onSubmitJudge}>送信する</Button>
        </Group>
      </Group>
    </Paper>
  );
};
