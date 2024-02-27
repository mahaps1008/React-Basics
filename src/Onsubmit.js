import React,{useState} from 'react'


function Onsubmit() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Form Data:', { username, password });
  };
  return (
    <form onSubmit={handleSubmit}>
    <label>Username:</label>
    <input
      type="text"
      id="usernameInput"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />

    <label htmlFor="passwordInput">Password:</label>
    <input
      type="password"
      id="passwordInput"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

    <button type="submit">Submit</button>
  </form>
  )
}

export default Onsubmit;