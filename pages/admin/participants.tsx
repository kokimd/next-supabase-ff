import { AdminMembers } from '../../components/admin/members/AdminMembers/AdminMembers';
import { AdminLayout } from '../../components/layout/AdminLayout';

const Participants = () => {
  return (
    <AdminLayout title='審査結果'>
      <AdminMembers />
    </AdminLayout>
  );
};

export default Participants;
