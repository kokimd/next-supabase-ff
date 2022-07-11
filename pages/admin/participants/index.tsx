import { MemberList } from '../../../components/judge/MemberList';
import { AdminLayout } from '../../../components/layout/AdminLayout';

const Participants = () => {
  return (
    <AdminLayout title='参加者一覧'>
      <MemberList />
    </AdminLayout>
  );
};

export default Participants;
