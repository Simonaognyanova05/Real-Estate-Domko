const mongoose = require('mongoose');
const Rent = require('../../models/Rent');

const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function filterRentsReq(req, res) {
    await mongoose.connect(dbUrl, connectionParams);
    try {
        const rents = (await Rent.find({ type: 'Апартамент', location: 'Пловдив'})).map(x => x.toJSON());
        return rents;
    } catch (e) {
        console.log(e);
    }
}

module.exports = { filterRentsReq };
