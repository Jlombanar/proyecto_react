import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate()

  
  async function handleSubmit(e) {
    e.preventDefault(); // Evita que el formulario recargue la página

    try {
      // Realizar la solicitud POST al backend con los datos del usuario
      const response = await axios.post('http://localhost:8081/register', { email, password });
      setMessage(response.data.message); // Mostrar mensaje de éxito o error
      alert("Registro exitoso!");
      navigate('/login', { replace: true });
    } catch (error) {
      // Manejar errores y mostrar el mensaje correspondiente
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Error al registrar el usuario");
      }
    }
  }

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        {/* Campo para ingresar el correo electrónico */}
        <div>
          <label>Correo Electrónico:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
          />
        </div>
        {/* Campo para ingresar la contraseña */}
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
      
    </div>
  );
};

export default Register;
