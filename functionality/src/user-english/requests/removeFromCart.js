const mongoose = require('mongoose');
const Cart = require('../../models/Cart');

const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function removeFromCart(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const itemId = req.params.itemId;

    try {
        await Cart.findByIdAndDelete(itemId);
        res.redirect('/admin/bag');
    } catch (err) {
        console.log(err);
    } finally {
        mongoose.disconnect();
    }
}
module.exports = { removeFromCart };