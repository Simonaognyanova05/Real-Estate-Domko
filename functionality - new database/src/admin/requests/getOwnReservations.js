const mongoose = require('mongoose');
const Reserve = require('../../models/Reserve');

const dbUrl = 'mongodb+srv://domko:SmaH0gHdPhr1WyhB@domko.yxvsqww.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function getOwnReservations(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const userId = req.params.userId;
    try {
        const ownReservations = (await Reserve.find({ _id: userId })).map(x => x.toJSON());
        return ownReservations;
    } catch (e) {
        console.log(e);
    }
}

module.exports = { getOwnReservations };
