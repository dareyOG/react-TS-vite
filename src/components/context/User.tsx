import { useUser } from './UserContext';

export default function User() {
  const { user, setUser } = useUser();
  const handleLogin = () => {
    setUser({ name: 'Fred', email: 'fred@exmaple.org' });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {user ? (
        <>
          <p>user name is {user.name}</p>
          <p>user email is {user.email}</p>
        </>
      ) : (
        <p>Logged out</p>
      )}
    </div>
  );
}
