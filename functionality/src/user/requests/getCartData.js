const mongoose = require('mongoose');
const Cart = require('../../models/Cart');

const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function getCartData() {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        const cart = (await Cart.find({})).map(x => x.toJSON());
        return cart;
    } catch (e) {
        console.log(e);
    }
}

module.exports = { getCartData };
