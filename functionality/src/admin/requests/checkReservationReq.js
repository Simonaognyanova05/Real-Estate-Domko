const mongoose = require('mongoose');
const Reserve = require('../../models/Reserve');

const dbUrl = 'mongodb+srv://domko:SmaH0gHdPhr1WyhB@domko.yxvsqww.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function checkReservationReq(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const userId = req.params.userId;

    try {
        await Reserve.findOneAndDelete({ _id: userId });
        res.redirect('/admin/usersWithReservations');
    } catch (err) {
        console.log(err);
    } finally {
        mongoose.disconnect();
    }
}
module.exports = { checkReservationReq };