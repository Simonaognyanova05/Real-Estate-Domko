const mongoose = require('mongoose');
const Favourites = require('../../models/Favourites');

const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}
async function addToFavourites(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { type, location, address, floors, rooms, squareMeters, price, priceForHour, img1, img2, img3, img4, img5 } = req.body;

    try {
        const favourites = new Favourites({
            type: type.toString(), location: location.toString(), address: address.toString(), floors: Number(floors), rooms: Number(rooms), squareMeters: Number(squareMeters), price: Number(price), priceForHour: Number(priceForHour), img1: img1.toString(), 
            img2: img2.toString(), img3: img3.toString(), img4: img4.toString(), img5: img5.toString(), ownerId: req.session.user._id
        })
        await favourites.save();
        res.redirect('/');
    } catch (e) {
        console.log(e);
    }
}

module.exports = { addToFavourites };