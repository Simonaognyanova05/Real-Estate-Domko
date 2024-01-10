const mongoose = require('mongoose');


const contactsSchema = new mongoose.Schema({
    title: {type: String, required: true},
    address: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},

});

const Contacts = mongoose.model('Contacts', contactsSchema);

module.exports = Contacts;