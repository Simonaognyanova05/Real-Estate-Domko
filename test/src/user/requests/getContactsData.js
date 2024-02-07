const mongoose = require('mongoose');
const Contacts = require('../../models/Contacts');

const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function getContactsData() {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        const contacts = (await Contacts.findOne()).toJSON();
        return contacts;
    } catch (e) {
        console.log(e);
    }
}

module.exports = { getContactsData };
