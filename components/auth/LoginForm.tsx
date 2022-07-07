import { Box, Button, Group, PasswordInput, TextInput } from '@mantine/core';
import { FC } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { ErrorMessage } from '../util/ErrorMessage';

export const LoginForm: FC = () => {
  const { error, login, authForm } = useAuth();

  return (
    <Box className='p-4 md:p-8'>
      <Box className='mt-12 w-7/12 rounded-md bg-white p-8' mx='auto'>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form className='mx-auto mt-4 flex flex-col space-y-8' onSubmit={login}>
          <TextInput
            required
            label='Email'
            placeholder='your@email.com'
            {...authForm.getInputProps('email')}
          />
          <PasswordInput
            placeholder='Password'
            label='Password'
            required
            {...authForm.getInputProps('password')}
          />
          <Group position='center' mt='md'>
            <Button type='submit'>ログイン</Button>
          </Group>
        </form>
      </Box>
    </Box>
  );
};
