const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UsuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    dataNasc: {
        type: Date,
        required: true,
    },
    naturalidade: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

UsuarioSchema.plugin(mongoosePaginate);

mongoose.model('Usuario', UsuarioSchema);