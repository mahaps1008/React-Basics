import React,{useState} from 'react'


function Handlelogin() {

  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };
  return(
    <div>
    {isLoggedIn ? (
      <div>
        <p>Welcome! You are logged in.</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    ) : (
      <div>
        <p>Please login to continue.</p>
        <button onClick={handleLogin}>Login</button>
      </div>
    )}
  </div>
  )
}
export default Handlelogin;
