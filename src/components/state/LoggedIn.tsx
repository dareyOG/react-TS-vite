import { useState } from 'react';

function LoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogIn = () => {
    setIsLoggedIn(true);
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogIn}>Login</button>
      <button onClick={handleLogOut}>LogOut</button>
      <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
    </div>
  );
}

export default LoggedIn;
