const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const urlMongo = process.env.MONGO_URI;

mongoose.connect(urlMongo)
    .then(() => {
        console.log('✅ Conexión a MongoDB exitosa');
    })
    .catch((error) => {
        console.error('❌ Error al conectar a MongoDB:', error);
        process.exit(1);
    });

module.exports = { mongoose };