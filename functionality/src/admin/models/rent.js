const mongoose = require('mongoose');

const rentSchema = new mongoose.Schema({
    type: {type: String, required: true},
    quadrature: {type: Number, required: true},
    pricе: {type: Number, required: true},
    description: {type: String, required: true},
    img1: {type: String},
    img2: {type: String},
    img3: {type: String},
    img4: {type: String},
    img5: {type: String},
});

const Rent = mongoose.model('Rent', rentSchema);

module.exports = Rent;