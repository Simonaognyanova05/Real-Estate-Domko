const mongoose = require('mongoose');
const Cart = require('../../models/Cart');

const dbUrl = 'mongodb+srv://domko:<password>@domko.yxvsqww.mongodb.net/?retryWrites=true&w=majority&appName=domko';
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