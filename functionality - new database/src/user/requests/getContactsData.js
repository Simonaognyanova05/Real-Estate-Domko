const mongoose = require('mongoose');
const Contacts = require('../../models/Contacts');

const dbUrl = 'mongodb+srv://domko:SmaH0gHdPhr1WyhB@domko.yxvsqww.mongodb.net/';

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
