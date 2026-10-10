const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

require('./database.js');

// CORS ultra permisivo para producción en Vercel
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization, Accept');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    next();
});

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

const empleadoRoutes = require('./routes/empleado.routes');
app.use('/api/empleados', empleadoRoutes);

app.get('/', (req, res) => {
    res.send('Hablalo!');
});

module.exports = app;
