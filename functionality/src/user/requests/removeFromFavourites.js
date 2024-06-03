const mongoose = require('mongoose');
const Favourites = require('../../models/Favourites');

const dbUrl = 'mongodb+srv://domko:SmaH0gHdPhr1WyhB@domko.yxvsqww.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function removeFromFavourites(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const itemId = req.params.itemId;

    try {
        await Favourites.findByIdAndDelete(itemId);
        res.redirect('/admin/bag');
    } catch (err) {
        console.log(err);
    } finally {
        mongoose.disconnect();
    }
}
module.exports = { removeFromFavourites };