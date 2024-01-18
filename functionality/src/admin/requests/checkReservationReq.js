const mongoose = require('mongoose');
const Reserve = require('../../models/Reserve');

const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function checkReservationReq(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const userId = req.params.userId;

    try {
        await Reserve.findOneAndDelete({ownerId: userId});
        res.redirect('/admin/reserve');
    } catch (err) {
        console.log(err);
    } finally {
        mongoose.disconnect();
    }
}
module.exports = { checkReservationReq };