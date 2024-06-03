const mongoose = require('mongoose');
const Sale = require('../../models/Sales');

const dbUrl = 'mongodb+srv://domko:SmaH0gHdPhr1WyhB@domko.yxvsqww.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function createSale(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { type, location, address, floors, rooms, squareMeters, price, priceForHour, img1, img2, img3, img4, img5, img6 } = req.body;

    try {
        const sale = new Sale({
            type, location, address, floors, rooms, squareMeters, price, priceForHour, img1, img2, img3, img4, img5, img6
        })
        await sale.save();
        res.redirect('/admin/sales');
    } catch (e) {
        console.log(e);
    }
}

module.exports = { createSale };
