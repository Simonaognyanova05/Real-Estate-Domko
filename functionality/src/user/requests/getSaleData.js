const mongoose = require('mongoose');
const Sale = require('../../models/Sales');

const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function getSaleData(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        const saleData = (await Sale.findById(req.params.saleId)).map(x => x.toJSON());
        return saleData;
    } catch (e) {
        console.log(e);
    }
}

module.exports = { getSaleData };