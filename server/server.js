const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors'); 

const app = express();

app.use(bodyParser.json());
app.use(cors());

const path = require('path');


const usuariosFilePath = path.resolve(__dirname, '..', 'src', 'data', 'usuarios.json');

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

app.delete('/usuarios/:usuario', (req, res) => {
  const usuarioAEliminar = req.params.usuario;

  fs.readFile(usuariosFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al leer el archivo de usuarios.' });
      return;
    }

    try {
      let usuarios = JSON.parse(data);
      usuarios = usuarios.filter(usuario => usuario.usuario !== usuarioAEliminar);

      fs.writeFile(usuariosFilePath, JSON.stringify(usuarios, null, 2), (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Error al escribir en el archivo de usuarios.' });
          return;
        }

        res.json({ message: 'Usuario eliminado correctamente.' });
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
