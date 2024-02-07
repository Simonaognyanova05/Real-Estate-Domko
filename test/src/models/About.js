const mongoose = require('mongoose');


const aboutSchema = new mongoose.Schema({
    title: {type: String, required: true},
    history: {type: String, required: true},
    info: {type: String, required: true},
});

const About = mongoose.model('About', aboutSchema);

module.exports = About;