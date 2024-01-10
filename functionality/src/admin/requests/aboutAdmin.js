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
        const about = new About({
            title, history, info
        })
        await about.save();
        res.redirect('/about');
    } catch (e) {
        console.log(e);
    }
}

module.exports = { aboutAdmin };