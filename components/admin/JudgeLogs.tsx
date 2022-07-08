import { Box, Group, Text } from '@mantine/core';
import { FC } from 'react';

export const JudgeLogs: FC = () => {
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
  return (
    <Box className='rounded-md bg-gray-800 p-8'>
      <Box className='-mt-4 w-full text-white'>
        {elements.map((judge, index) => (
          <Group className='mt-4 flex flex-col items-start' key={index}>
            <Text>
              {`/shout ${judge.name} 【可愛さ&カッコよさ】 ${judge.cuteness}点 【面白さ】${judge.fun}点 【パフォーマンスの凄さ】${judge.amazing}点 【合計】${judge.sum}点`}
            </Text>
            <Text>{'<wait2>'}</Text>
          </Group>
        ))}
      </Box>
    </Box>
  );
};
