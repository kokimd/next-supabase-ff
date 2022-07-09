import type { NextPage } from 'next';
import { DefaultLayout } from '../components/layout/DefaultLayout';
import useStore from '../utils/store';
import { JudgeForm } from '../components/judge/JudgeForm';
import { LoginForm } from '../components/auth/LoginForm';

const Home: NextPage = () => {
  const session = useStore((state) => state.session);

  return (
    <DefaultLayout title={session ? '審査' : 'ログイン'}>
      {session ? <JudgeForm /> : <LoginForm />}
    </DefaultLayout>
  );
};

export default Home;
