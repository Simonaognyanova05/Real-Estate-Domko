const mongoose = require('mongoose');

const reserveSchema = new mongoose.Schema({
    type: {type: Object, required: true},
    location: {type: Object, required: true},
    address: {type: Object, required: true},
    floors: {type: Object, required: true},
    rooms: {type: Object, required: true},
    squareMeters: {type: Object, required: true},
    price: {type: Object, required: true},
    priceForHour: {type: Object, required: true},
    img1: {type: Object, required: true},
    img2: {type: Object, required: true},
    img3: {type: Object, required: true},
    img4: {type: Object, required: true},
    img5: {type: Object, required: true},
    names: {type: String, required: true},
    date: {type: String, required: true},
    time: {type: String, required: true},
    totalPrice: {type: Number, required: true},
    ownerId: {type: String, required: true}
});

const Reserve = mongoose.model('Reserve', reserveSchema);

module.exports = Reserve;