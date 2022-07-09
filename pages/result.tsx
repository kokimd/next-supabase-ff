import { NextPage } from 'next';
import { JudgeTabs } from '../components/judge/JudgeTabs';
import { DefaultLayout } from '../components/layout/DefaultLayout';

const JudgeResult: NextPage = () => {
  return (
    <DefaultLayout title='審査結果'>
      <JudgeTabs />
    </DefaultLayout>
  );
};

export default JudgeResult;
