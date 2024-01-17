const mongoose = require('mongoose');

const reserveSchema = new mongoose.Schema({
    propertyId: {type: Object, required: true},
    names: {type: String, required: true},
    date: {type: String, required: true},
    time: {type: String, required: true},
});

const Reserve = mongoose.model('Reserve', reserveSchema);

module.exports = Reserve;