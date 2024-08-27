import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
    
        try {
          const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            // Maneja el éxito (por ejemplo, guarda el token, redirige, etc.)
            console.log('Login successful:', data);
            localStorage.setItem('token', data.token);
            navigate('/home')
          } else {
            // Maneja el error (por ejemplo, credenciales incorrectas)
            setError(data.message || 'Login failed');
          }
        } catch (err) {
          setError('An error occurred during login. Please try again.');
          console.error('Login error:', err);
        } finally {
          setLoading(false);
        }
      };
    
      return (
        <div className='login'>
          <h2 className='loginTitle'>Login</h2>
          <form onSubmit={handleSubmit}>
            <div  className="formElement">
              <label className="basicLabel">Email:</label>
              <input className="basicInput"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div  className="formElement">
              <label className="basicLabel">Password:</label>
              <input className="basicInput"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button className="basicButton"type="submit" disabled={loading}>
              {loading ? 'Loading...' : 'Login'}
            </button>
          </form>
        </div>
      );
    };
    
    export default Login;