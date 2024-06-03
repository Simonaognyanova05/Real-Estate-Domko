const mongoose = require('mongoose');
const Sale = require('../../models/Sales');

const dbUrl = 'mongodb+srv://domko:SmaH0gHdPhr1WyhB@domko.yxvsqww.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function deleteSaleReq(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const saleId = req.params.saleId;

    try {
        await Sale.findByIdAndDelete(saleId);
        res.redirect('/admin/sale');
    } catch (err) {
        console.log(err);
    } finally {
        mongoose.disconnect();
    }
}
module.exports = { deleteSaleReq };