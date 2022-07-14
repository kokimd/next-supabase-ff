import { Box, Group, Text } from '@mantine/core';
import { FC } from 'react';
import useStore from '../../utils/store';

export const JudgeLogs: FC = () => {
  const judgments = useStore((state) => state.judgments);

  console.log(judgments);

  const elements = judgments?.map((data) => ({
    name: data.participants?.name,
    cuteNess: data.cuteNess,
    fun: data.fun,
    amazing: data.amazing,
    sum: data.sum,
  }));
  return (
    <Box className='rounded-md bg-gray-800 p-8'>
      <Box className='-mt-4 w-full text-white'>
        {elements?.map((judge, index) => (
          <Group className='mt-4 flex flex-col items-start' key={index}>
            <Text>
              {`/yell ${judge.name} 【可愛さ&カッコよさ】 ${judge.cuteNess}点 【面白さ】${judge.fun}点 【パフォーマンスの凄さ】${judge.amazing}点 【合計】${judge.sum}点`}
            </Text>
            <Text>{'<wait2>'}</Text>
          </Group>
        ))}
      </Box>
    </Box>
  );
};
