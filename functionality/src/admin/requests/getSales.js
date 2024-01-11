const mongoose = require('mongoose');
const Sales = require('./models/Sales');

const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function getSales() {
    await mongoose.connect(dbUrl, connectionParams);

    try {
        const sales = (await Sales.find({})).map(x => x.toJSON());
        return sales;
    } catch (e) {
        console.log(e);
    }
}

module.exports = { getSales };
