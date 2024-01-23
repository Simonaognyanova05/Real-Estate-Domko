const mongoose = require('mongoose');
const Rent = require('../../models/Rent');
const filterRents = require('../filterRents');

const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function filterRentsReq(req, res) {
    await mongoose.connect(dbUrl, connectionParams);
    const { type, location } = req.body;

    try {
        const rents = (await Rent.find({ type: type, location: location })).map(x => x.toJSON());

        req.storage = { rents };
        filterRents(req, res, rents);
    } catch (e) {
        console.log(e);
    }
}

module.exports = { filterRentsReq };
