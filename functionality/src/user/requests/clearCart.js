const mongoose = require('mongoose');
const Cart = require('../../models/Cart');

const dbUrl = 'mongodb+srv://domko:SmaH0gHdPhr1WyhB@domko.yxvsqww.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function clearCart(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        await Cart.deleteMany({ ownerId: req.session.user._id });
        res.redirect('/tenks');
    } catch (e) {
        console.log(e);
    }
}

module.exports = { clearCart };