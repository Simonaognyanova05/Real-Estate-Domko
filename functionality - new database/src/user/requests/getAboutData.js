const mongoose = require('mongoose');
const About = require('../../models/About');

const dbUrl = 'mongodb+srv://domko:SmaH0gHdPhr1WyhB@domko.yxvsqww.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function getAboutData() {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        const about = (await About.findOne({})).toJSON();
        return about;
    } catch (e) {
        console.log(e);
    }
}

module.exports = { getAboutData };
