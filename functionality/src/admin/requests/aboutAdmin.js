const mongoose = require('mongoose');
const About = require('./models/About');

const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function aboutAdmin(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { title, history, info } = req.body;

    try {
        await About.updateOne({ title }, { $set: { title, history, info } });
        res.redirect('/about');
    } catch (err) {
        console.log(err);
    } finally {
        mongoose.disconnect();
    }
}

module.exports = { aboutAdmin };