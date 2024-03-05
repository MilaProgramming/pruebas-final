const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors'); // Importa el paquete cors

const app = express();

app.use(bodyParser.json());
app.use(cors()); // Usa el middleware cors para permitir solicitudes desde cualquier origen

const path = require('path');

// Ruta absoluta al archivo JSON de usuarios
const usuariosFilePath = path.resolve(__dirname, '..', 'src', 'data', 'usuarios.json');

// Ruta para obtener los usuarios
app.get('/usuarios', (req, res) => {
  fs.readFile(usuariosFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al leer el archivo de usuarios.' });
      return;
    }

    try {
      const usuarios = JSON.parse(data);
      res.json(usuarios);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al analizar los datos de usuarios.' });
    }
  });
});

// Ruta para registrar un nuevo usuario
app.post('/usuarios', (req, res) => {
  const nuevoUsuario = req.body;

  fs.readFile(usuariosFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al leer el archivo de usuarios.' });
      return;
    }

    try {
      const usuarios = JSON.parse(data);
      usuarios.push(nuevoUsuario);

      fs.writeFile(usuariosFilePath, JSON.stringify(usuarios, null, 2), (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Error al escribir en el archivo de usuarios.' });
          return;
        }

        res.json({ message: 'Usuario registrado correctamente.' });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al analizar los datos de usuarios.' });
    }
  });
});

app.listen(8000, () => {
  console.log('Servidor escuchando en el puerto 8000');
});
