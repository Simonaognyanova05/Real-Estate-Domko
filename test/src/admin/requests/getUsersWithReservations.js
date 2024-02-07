const mongoose = require('mongoose');
const Reserve = require('../../models/Reserve');

const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';

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
