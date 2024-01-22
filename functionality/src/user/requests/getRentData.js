const mongoose = require('mongoose');
const Rent = require('../../models/Rent');

const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function getRentData(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        const rentData = (await Rent.findById(req.params.rentId)).toJSON();
        return rentData;
    } catch (e) {
        console.log(e);
    }
}

module.exports = { getRentData };