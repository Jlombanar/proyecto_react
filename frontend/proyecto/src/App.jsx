import React from 'react';
import Navbar  from './Navbar'
import { BrowserRouter, Router , Route, Routes} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Sitios from './Sitios';
import Productos from './Productos';
import Register from './Register'






function App() {
  return (
    <BrowserRouter>
  
    <Navbar />
    <Routes>
    
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/Sitios" element={<Sitios />} />
    <Route path="/Productos" element={<Productos />} />
    <Route path="/Register" element={<Register />} />
 
    
    
    </Routes>
  </BrowserRouter>
  );
}
export default App;