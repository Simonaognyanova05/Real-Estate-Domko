const mongoose = require('mongoose');
const Message = require('../../models/Message');

const dbUrl = 'mongodb+srv://domko:SmaH0gHdPhr1WyhB@domko.yxvsqww.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function getOwnMessages(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const userId = req.params.userId;
    try {
        const ownMessages = (await Message.find({ _id: userId })).map(x => x.toJSON());
        return ownMessages;
    } catch (e) {
        console.log(e);
    }
}

module.exports = { getOwnMessages };
