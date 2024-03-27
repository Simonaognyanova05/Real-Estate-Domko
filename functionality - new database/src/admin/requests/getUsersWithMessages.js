const mongoose = require('mongoose');
const Message = require('../../models/Message');

const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';

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
