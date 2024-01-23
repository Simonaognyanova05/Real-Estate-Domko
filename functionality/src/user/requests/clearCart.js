const mongoose = require('mongoose');
const Cart = require('../../models/Cart');

const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function clearCart(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        await Cart.deleteMany({ ownerId: req.session.user._id });
        res.redirect('/');
    } catch (e) {
        console.log(e);
    }
}

module.exports = { clearCart };