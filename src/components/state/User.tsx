import { useState } from 'react';

type AuthUserProps = {
  name: string;
  email: string;
};

function User() {
  const [user, setUser] = useState<null | AuthUserProps>(null);

  const handleLogIn = () => {
    setUser({ name: 'Tim', email: 'tim@example.com' });
  };
  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogOut}>LogOut</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
}

export default User;
