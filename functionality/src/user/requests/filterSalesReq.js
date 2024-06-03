const mongoose = require('mongoose');
const Sales = require('../../models/Sales');
const filterSales = require('../filterSales');

const dbUrl = 'mongodb+srv://domko:SmaH0gHdPhr1WyhB@domko.yxvsqww.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function filterSalesReq(req, res) {
    await mongoose.connect(dbUrl, connectionParams);
    const { type, location } = req.body;

    try {
        const sales = (await Sales.find({ type: type, location: location })).map(x => x.toJSON());

        req.storage = { sales };
        filterSales(req, res, sales);
    } catch (e) {
        console.log(e);
    }
}

module.exports = { filterSalesReq };
