const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    names: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true},
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;