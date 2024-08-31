import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './login.css'

export function Login() {

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const navigate = useNavigate()
    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/login', { email, password })
        .then(res => {
            console.log(res);
            
            if (res.status === 200) {
                alert(' Ingrsando a nuestro sistema')
                navigate('/productos'); // Redirige a la página de productos
            }
        })
        .catch(err => {
            console.log(err);
            alert('Usuario no registrado')
            
        });
};


    return(
        <main>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2> Inicio de sesion</h2>
                    <input type="email" placeholder="email" onChange ={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="contraseña" onChange ={e => setPassword(e.target.value)}/>
                </div>
                <button>INGRESAR</button>
            
            </form>
            <p>¿No tienes cuenta? <a href="/register">Regístrate aquí</a></p>
        </main>
    )
    
}
export default Login;