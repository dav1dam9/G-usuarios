const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Importar conexión a la base de datos
require('./database.js');

// Configuración robusta de CORS manual para evitar bloqueos en Vercel
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use(cors({ origin: '*' }));
app.use(express.json());

// IMPORTAR Y USAR LAS RUTAS DE EMPLEADOS
const empleadoRoutes = require('./routes/empleado.routes');
app.use('/api/empleados', empleadoRoutes);

app.get('/', (req, res) => {
    res.send('Hablalo!');
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}

module.exports = app;
