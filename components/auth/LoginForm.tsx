import { Box, Button, Group, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { FC } from 'react';

export const LoginForm: FC = () => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  });
  return (
    <Box className='p-4 md:p-8'>
      <Box className='mt-12 w-7/12 rounded-md bg-white p-8' mx='auto'>
        <form
          className='mx-auto flex flex-col space-y-8'
          onSubmit={form.onSubmit((values) => console.log(values))}
        >
          <TextInput
            required
            label='Email'
            placeholder='your@email.com'
            {...form.getInputProps('email')}
          />
          <PasswordInput placeholder='Password' label='Password' required />
          <Group position='center' mt='md'>
            <Button type='submit'>ログイン</Button>
          </Group>
        </form>
      </Box>
    </Box>
  );
};
