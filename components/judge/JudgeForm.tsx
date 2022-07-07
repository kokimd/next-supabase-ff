import { FC } from 'react';
import { Box, Button, Group, NumberInput, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
export const JudgeForm: FC = () => {
  const form = useForm({
    initialValues: {
      member: '',
      cuteNess: 0,
      fun: 0,
      amazing: 0,
    },
  });
  return (
    <Box className='rounded-md bg-white p-8' mx='auto'>
      <form
        className='flex flex-col space-y-8'
        onSubmit={form.onSubmit((values) => console.log(values))}
      >
        <Select
          styles={{ label: { fontWeight: 'bold', padding: '4px 0' } }}
          label='審査対象'
          placeholder='参加者を選択'
          required
          data={[
            { value: '1', label: '参加者1' },
            { value: '2', label: '参加者2' },
            { value: '3', label: '参加者3' },
            { value: '4', label: '参加者4' },
          ]}
          {...form.getInputProps('member')}
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
      </form>
    </Box>
  );
};
