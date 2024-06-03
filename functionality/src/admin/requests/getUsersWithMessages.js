const mongoose = require('mongoose');
const Message = require('../../models/Message');

const dbUrl = 'mongodb+srv://domko:SmaH0gHdPhr1WyhB@domko.yxvsqww.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function getUsersWithMessages() {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        const usersWithMessages = (await Message.find({})).map(x => x.toJSON());
        return usersWithMessages;
    } catch (e) {
        console.log(e);
    }
}

module.exports = { getUsersWithMessages };
