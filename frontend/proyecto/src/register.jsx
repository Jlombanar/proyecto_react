import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
    } else {
      fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert('Registro exitoso');
          navigate('/login');
        } else {
          setError(data.message);
        }
      })
      .catch((err) => console.error(err));
    }
  };

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Correo electrónico:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <label>
          Confirmar contraseña:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Registrar</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Register;