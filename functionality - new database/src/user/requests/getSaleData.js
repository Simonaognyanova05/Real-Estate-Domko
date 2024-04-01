const mongoose = require('mongoose');
const Sale = require('../../models/Sales');

const dbUrl = 'mongodb+srv://domko:SmaH0gHdPhr1WyhB@domko.yxvsqww.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function getSaleData(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        const saleData = (await Sale.findById(req.params.saleId)).toJSON();
        return saleData;
    } catch (e) {
        console.log(e);
    }
}

module.exports = { getSaleData };