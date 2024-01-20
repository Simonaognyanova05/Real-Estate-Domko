const mongoose = require('mongoose');

const filterSchema = new mongoose.Schema({
    type: {type: String},
    location: {type: String}
});

const Filter = mongoose.model('Filter', filterSchema);

module.exports = Filter;