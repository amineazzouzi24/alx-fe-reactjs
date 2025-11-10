import { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>تفاصيل المستخدم</h2>
      <p><strong>الاسم:</strong> {userData.name}</p>
      <p><strong>البريد الإلكتروني:</strong> {userData.email}</p>
    </div>
  );
}

export default UserDetails;
