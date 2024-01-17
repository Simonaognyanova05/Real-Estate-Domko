const mongoose = require('mongoose');
const Reserve = require('../../models/Reserve');

const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}
async function reservation(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { propertyId, names, date, time } = req.body;

    try {
        
        const reserve = new Reserve({
            propertyId, names, date, time
        })
        await reserve.save();
        res.redirect('/');
    } catch (e) {
        console.log(e);
    }
}

module.exports = { reservation };