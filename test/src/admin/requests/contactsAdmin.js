const mongoose = require('mongoose');
const Contacts = require('../../models/Contacts');

const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function contactsAdmin(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { title, address, phone, email } = req.body;

    try {
        await Contacts.updateOne({ title }, { $set: { title, address, phone, email } });
        res.redirect('/contacts');
    } catch (err) {
        console.log(err);
    } finally {
        mongoose.disconnect();
    }
}

module.exports = { contactsAdmin };