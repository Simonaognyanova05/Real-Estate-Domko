const mongoose = require('mongoose');
const Sales = require('../../models/Sales');

const dbUrl = 'mongodb+srv://domko:SmaH0gHdPhr1WyhB@domko.yxvsqww.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function getUserSales() {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        const sales = (await Sales.find({})).map(x => x.toJSON());
        return sales;
    } catch (e) {
        console.log(e);
    }
}

module.exports = { getUserSales };
