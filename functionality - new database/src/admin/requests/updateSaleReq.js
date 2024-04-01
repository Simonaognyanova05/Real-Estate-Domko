const mongoose = require('mongoose');
const Sale = require('../../models/Sales');

const dbUrl = 'mongodb+srv://domko:SmaH0gHdPhr1WyhB@domko.yxvsqww.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function updateSaleReq(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { type, location, address, floors, rooms, squareMeters, price, priceForHour, img1, img2, img3, img4, img5, img6 } = req.body;

    try {
        await Sale.updateOne({ _id: req.params.saleId }, { $set: { type, location, address, floors, rooms, squareMeters, price, priceForHour, img1, img2, img3, img4, img5, img6  } });
        res.redirect('/admin/sales');      
    } catch (err) {
        console.log(err);
    } finally {
        mongoose.disconnect();
    }
}

module.exports = { updateSaleReq };