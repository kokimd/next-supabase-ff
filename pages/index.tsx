import type { NextPage } from 'next';
import { DefaultLayout } from '../components/layout/DefaultLayout';
import useStore from '../utils/store';
import { JudgeForm } from '../components/judge/JudgeForm';

const Home: NextPage = () => {
  const session = useStore((state) => state.session);

  return <DefaultLayout title='審査'>{session && <JudgeForm />}</DefaultLayout>;
};

export default Home;
