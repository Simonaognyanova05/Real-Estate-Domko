const mongoose = require('mongoose');
const Rent = require('../../models/Rent');

const dbUrl = 'mongodb+srv://domko:SmaH0gHdPhr1WyhB@domko.yxvsqww.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function getUserRents() {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        const rents = (await Rent.find({})).map(x => x.toJSON());
        return rents;
    } catch (e) {
        console.log(e);
    }
}

module.exports = { getUserRents };