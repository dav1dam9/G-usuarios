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
const empleadoRoutes = require('./routes/empleado.routes');
app.use('/api/empleados', empleadoRoutes);

app.get('/', (req, res) => {
    res.send('Hablalo!');
});

// En local levanta el puerto normal, en producción Vercel lo toma con el export
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}

module.exports = app;
