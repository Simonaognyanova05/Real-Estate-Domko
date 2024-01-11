const mongoose = require('mongoose');
const Sale = require('./models/Sales');

const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function createSale(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { type, location, address, floors, rooms, squareMeters, price, priceForHour, img1, img2, img3, img4, img5 } = req.body;

    try {
        const sale = new Sale({
            type, location, address, floors, rooms, squareMeters, price, priceForHour, img1, img2, img3, img4, img5
        })
        await sale.save();
        res.redirect('/admin/sales');
    } catch (e) {
        console.log(e);
    }
}

module.exports = { createSale };
