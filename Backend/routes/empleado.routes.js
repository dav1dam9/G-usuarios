const express = require('express');
const router = express.Router();

// Importas las rutas/controlador que tienes en control.js
const controlRouter = require('../controllers/control');

// Usas esas rutas bajo un prefijo
router.use('/', controlRouter);

module.exports = router;