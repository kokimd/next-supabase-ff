import type { NextPage } from 'next';
import { DefaultLayout } from '../components/layout/DefaultLayout';
import { JudgeForm } from '../components/judge/JudgeForm';

const Judge: NextPage = () => {
  return (
    <DefaultLayout title='審査'>
      <JudgeForm />
    </DefaultLayout>
  );
};

export default Judge;
