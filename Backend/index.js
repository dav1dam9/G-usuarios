const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Importar conexión a la base de datos
require('./database.js');

// Middlewares (deben ir ANTES de las rutas)
app.use(cors({ origin: '*' }));
app.use(express.json());

// IMPORTAR Y USAR LAS RUTAS DE EMPLEADOS
const empleadoRoutes = require('./routes/empleado.routes.js');
app.use('/api/empleados', empleadoRoutes);

app.get('/', (req, res) => {
  res.send('Hablalo!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});