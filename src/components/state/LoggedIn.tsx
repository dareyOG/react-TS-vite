

import { useState } from "react";

type LoggedInProps =  {
  : any;
}

function LoggedIn({  }: LoggedInProps): React.JSX.Element {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogIn = ()=>{setIsLoggedIn(true)}
    const handleLogOut = ()=>{setIsLoggedIn(false)}

  return (
    <div>
        <button onClick={handleLogIn}></button>
        <button onClick={handleLogOut}></button>
        <div>User is {isLoggedIn?'logged in': 'logged out'}</div>
    </div>
  );
}

export default LoggedIn;