// src/app/admin/dashboard/page.js
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token'); // Fetch token from localStorage

    if (!token) {
      router.push('/admin'); // Redirect to login page if not authenticated
    } else {
      // Validate token with the backend API
      fetch('/api/auth', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setIsAuthenticated(true); // Token is valid, allow access
          } else {
            localStorage.removeItem('token'); // Remove invalid token
            router.push('/admin'); // Redirect to login
          }
        });
    }
  }, [router]);

  if (!isAuthenticated) return <p>Loading...</p>;

  return (
    <div style={styles.container}>
      <h2>Welcome to Admin Dashboard</h2>
      <button
        onClick={() => {
          localStorage.removeItem('token'); // Log out by removing token
          router.push('/admin');
        }}
        style={styles.button}
      >
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '100px auto',
    padding: '30px',
    border: '1px solid #ddd',
    textAlign: 'center',
  },
  button: {
    padding: '10px',
    backgroundColor: '#ff4d4f',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
};

export default Dashboard;
