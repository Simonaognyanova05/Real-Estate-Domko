const mongoose = require('mongoose');
const Reserve = require('../../models/Reserve');

const dbUrl = 'mongodb+srv://domko:SmaH0gHdPhr1WyhB@domko.yxvsqww.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function getUsersWithReservations() {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        const usersWithReservations = (await Reserve.find({})).map(x => x.toJSON());
        return usersWithReservations;
    } catch (e) {
        console.log(e);
    }
}

module.exports = { getUsersWithReservations };
