var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
    title: {type: String, required: [true, 'Pole tytuł jest wymagane !'] },
    description: {type: String, required: [true, 'Treść artykułu jest wymagana !']},
    created: {type: Date, default: Date.now},
});

module.exports = mongoose.model('News', newsSchema)