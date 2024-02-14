const mongoose = require('mongoose');
const Rent = require('../../models/Rent');

const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function updateRentReq(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { type, location, address, floors, rooms, squareMeters, price, priceForHour, img1, img2, img3, img4, img5, img6 } = req.body;

    try {
        await Rent.updateOne({ _id: req.params.rentId }, { $set: { type, location, address, floors, rooms, squareMeters, price, priceForHour, img1, img2, img3, img4, img5, img6  } });
        res.redirect('/admin/rent');
    } catch (err) {
        console.log(err);
    } finally {
        mongoose.disconnect();
    }
}

module.exports = { updateRentReq };