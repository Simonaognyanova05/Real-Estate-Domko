const mongoose = require('mongoose');
const Rent = require('../models/rent');

const connectionString = 'mongodb://localhost:27017/domko';

async function createRent(req, res) {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    const { type, quadrature, pricе, description, img1, img2, img3, img4, img5 } = req.body;

    try {
        const rent = new Rent({
            type, quadrature, pricе, description, img1, img2, img3, img4, img5
        })

        await rent.save();
        res.redirect('/admin')
    } catch (err) {
        res.send('Error');
    }
}

module.exports = { createRent };