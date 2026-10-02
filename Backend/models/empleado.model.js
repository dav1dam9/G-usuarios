const mongoose = require('mongoose');
const { Schema } = mongoose;

const Usuariosschema = new Schema({
    name: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Por favor ingresa un correo electrónico válido'] // <-- Esto valida que contenga el @ y formato correcto
    }
});

module.exports = mongoose.model('Usuariosschema', Usuariosschema);