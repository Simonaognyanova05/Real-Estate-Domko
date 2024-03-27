const mongoose = require('mongoose');
const Favourites = require('../../models/Favourites');

const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function getFavouritesData(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        const favourites = (await Favourites.find({ ownerId: req.session.user._id})).map(x => x.toJSON());
        return favourites;
    } catch (e) {
        console.log(e);
    }
}

module.exports = { getFavouritesData };
