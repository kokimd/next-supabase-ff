import type { NextPage } from 'next';
import { DefaultLayout } from '../components/layout/DefaultLayout';
import { LoginForm } from '../components/auth/LoginForm';
import { JudgeTabs } from '../components/judge/JudgeTabs';
import useStore from '../utils/store';

const Home: NextPage = () => {
  const session = useStore((state) => state.session);

  return (
    <DefaultLayout title='ログイン'>
      <div className='w-full md:w-5/6'>
        {session ? <JudgeTabs /> : <LoginForm />}
      </div>
    </DefaultLayout>
  );
};

export default Home;
