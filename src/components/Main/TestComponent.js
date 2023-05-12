import React, { useState } from 'react';
import TokenAxiosApi from '../../api/TokenAxiosApi';

const TestComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  const handleClick = async () => {
    try {
      const response = await TokenAxiosApi.getToken(email, password);
      setToken(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick}>Get Token</button>
      {token && <p>Token: {token}</p>}
    </div>
  );
};

export default TestComponent;
