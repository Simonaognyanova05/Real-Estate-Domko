const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    ages: {type: Number, required: true},
    location: {type: String, required: true},
    profileImg: {type: String, required: true},
    interests: {type: String, required: true},
    hashedPass: {type: String, required: true},
});
const User = mongoose.model('User', userSchema);

module.exports = User;