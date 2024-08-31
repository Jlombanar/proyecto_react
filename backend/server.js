//1 - importamos modulo con require
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

//2 - configuracion
const app = express();
app.use(express.json());
app.use(cors());

//3 - conexion
const conexion = mysql.createConnection({
    host: "localhost",
    database: "personas",
    user: "root",
    password: ""
});

//4 - rutas
app.post('/login', (req, res) => {
    const db = "SELECT * FROM administradores WHERE email = ? AND password = ?";
    conexion.query(db, [req.body.email, req.body.password], (err, data) => {
      if (err) return res.status(50).json({ success: false, message: "Error en el inicio de sesión" });
      
        
  
      if (data.length > 0) {
        return res.status(200).json({ success: true, message: "BIENVENIDO A LA PLATAFORMA" });
      } else {
        return res.status(401).json({ success: false, message: "Usuario o contraseña incorrectos" });
      }
    });
  });
// register
                       
//5 - poner a escuchar al servidor
app.listen(8081,()=>{
    console.log("servidor escuchando...");
})