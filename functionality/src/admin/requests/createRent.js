const mongoose = require('mongoose');
const Rent = require('./models/Rent');

const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function createRent(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { type, location, address, floors, rooms, squareMeters, price, priceForHour, img1, img2, img3, img4, img5 } = req.body;

    try {
        const rent = new Rent({
            type, location, address, floors, rooms, squareMeters, price, priceForHour, img1, img2, img3, img4, img5
        })
        await rent.save();
        res.redirect('/admin/rent');
    } catch (e) {
        console.log(e);
    }
}

module.exports = { createRent };
