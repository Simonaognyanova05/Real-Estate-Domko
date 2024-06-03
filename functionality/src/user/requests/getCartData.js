const mongoose = require('mongoose');
const Cart = require('../../models/Cart');

const dbUrl = 'mongodb+srv://domko:SmaH0gHdPhr1WyhB@domko.yxvsqww.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function getCartData(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        const cart = (await Cart.find({ ownerId: req.session.user._id})).map(x => x.toJSON());
        return cart;
    } catch (e) {
        console.log(e);
    }
}

module.exports = { getCartData };
