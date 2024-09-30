// src/app/admin/page.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    // Call the login API with email and password
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }), // Send credentials to the backend
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem('token', data.token); // Store the JWT token
      router.push('/admin/dashboard'); // Redirect to dashboard after successful login
    } else {
      setError(data.message || 'Invalid email or password');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Admin Login</h2>
      {error && <p style={styles.error}>{error}</p>}
      <form onSubmit={handleLogin} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    maxWidth: '400px',
    margin: '100px auto',
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center',
  },
  form: { display: 'flex', flexDirection: 'column' },
  inputGroup: { marginBottom: '15px' },
  input: { padding: '10px', borderRadius: '5px', border: '1px solid #ddd' },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
  error: { color: 'red' },
};

export default AdminLogin;
