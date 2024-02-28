const mongoose = require('mongoose');
const Reserve = require('../../models/Reserve');
const { clearCart } = require('./clearCart');
const getTotalPrice = require('../requests/getTotalPriceInBag');


const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}
async function reservation(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { type, location, address, floors, rooms, squareMeters, price, priceForHour, img1, img2, img3, img4, img5, names, date, time } = req.body;

    try {
        const totalPrice = await getTotalPrice(req, res);
        const reserve = new Reserve({
            type, location, address, floors, rooms, squareMeters, price, priceForHour, img1, img2, img3, img4, img5, names, date, time, totalPrice ,ownerId: req.session.user._id
        })
        await reserve.save();
        await clearCart(req, res);
        res.redirect('/tenks');
    } catch (e) {
        console.log(e);
    }
}

module.exports = { reservation };