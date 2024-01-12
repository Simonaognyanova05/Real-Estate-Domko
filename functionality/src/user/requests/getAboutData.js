const mongoose = require('mongoose');
const About = require('../../models/About');

const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function getAboutData() {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        const about = (await About.find({})).map(x => x.toJSON());
        return about;
    } catch (e) {
        console.log(e);
    }
}

module.exports = { getAboutData };
