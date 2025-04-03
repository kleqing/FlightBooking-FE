import { useState } from 'react'
import './App.css'

function App() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const createUser = async () => {
    const userData = {
      id: "BFC91492-6C16-4577-8E32-679342B26E4F",
      normalizedUserName: "test123",
      normalizedEmail: "newtest@gmail.com",
      emailConfirmed: true,
      passwordHash: "12312312233",
      securityStamp: "None",
      concurrencyStamp: "None",
      phoneNumberConfirmed: false,
      twoFactorEnabled: false,
      lockoutEnd: "2025-04-03T08:01:41.376Z",
      lockoutEnabled: false,
      accessFailedCount: 0,
      userName: "Test123",
      email: "newTest@gmail.com",
      dateOfBirth: "2025-04-03T08:01:41.376Z",
      phoneNumber: "string",
      address: "string",
      createdDate: "2025-04-03T08:01:41.376Z"
    };

    try {
      const res = await fetch('https://localhost:7129/User', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      setResponse(data);
    }
    catch (err) {
      setError(err);
    }
  };

  return (
      <div>
        <h1>Create User</h1>
        <button onClick={createUser}>
          Create User
        </button>
        {response && <p>{JSON.stringify(response)}</p>}
        {error && <p style={{ color: 'red' }}>{error.message}</p>}
      </div>
  );
}

export default App;
