const mongoose = require('mongoose');

const urlMongo = 'mongodb://localhost:27017/usuarios';

mongoose.connect(urlMongo)
    .then(() => {
        console.log('✅ Conexión a MongoDB exitosa');
    })
    .catch((error) => {
        console.error('❌ Error al conectar a MongoDB:', error);
        process.exit(1);
    });

module.exports = { mongoose };