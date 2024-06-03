const mongoose = require('mongoose');
const About = require('../../models/About');

const dbUrl = 'mongodb+srv://domko:SmaH0gHdPhr1WyhB@domko.yxvsqww.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function aboutAdmin(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { title, history, info } = req.body;

    try {
        await About.updateOne({ $set: { title, history, info } });
        res.redirect('/admin/about');
    } catch (err) {
        console.log(err);
    } finally {
        mongoose.disconnect();
    }
}

module.exports = { aboutAdmin };