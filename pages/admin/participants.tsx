import { AdminMembers } from '../../components/admin/members/AdminMembers/AdminMembers';
import { AdminLayout } from '../../components/layout/AdminLayout';

const Participants = () => {
  return (
    <AdminLayout title='参加者一覧'>
      <AdminMembers />
    </AdminLayout>
  );
};

export default Participants;
