const mongoose = require('mongoose');
const Message = require('../../models/Message');

const dbUrl = 'mongodb+srv://domko:SmaH0gHdPhr1WyhB@domko.yxvsqww.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}
async function sentMessage(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { names, email, message } = req.body;

    try {
        const messages = new Message({
            names, email, message
        })
        await messages.save();
        res.redirect('/contacts');
    } catch (e) {
        console.log(e);
    }
}

module.exports = { sentMessage };