import { Box, Divider, Paper, Space, Text } from '@mantine/core';
import { FC } from 'react';
import useStore from '../../utils/store';
import { EditJudgeInputs } from './EditJudgeInputs';

export const EditJudgeResult: FC = () => {
  const judgments = useStore((state) => state.judgments);

  return (
    <Paper className='w-full rounded-md bg-white  p-8' mx='auto'>
      <Text className='text-xl font-bold'>
        {judgments && judgments[0].participants?.name}
      </Text>
      <Divider mt={12} />
      <Space h={'xl'} />
      {judgments?.map((data, index) => (
        <Box key={index} className='flex items-end justify-between space-y-4'>
          <Text className='mt-10 self-center font-bold'>
            {data.profiles?.name}
          </Text>
          <EditJudgeInputs formData={data} />
        </Box>
      ))}
    </Paper>
  );
};
