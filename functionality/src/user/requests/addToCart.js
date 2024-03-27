const mongoose = require('mongoose');
const Cart = require('../../models/Cart');

const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';
const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function addToCart(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { type, location, address, floors, rooms, squareMeters, price, priceForHour, img1, img2, img3, img4, img5 } = req.body;

    try {
        const existingProduct = await Cart.findOne({
            type: type.toString(),
            location: location.toString(),
            address: address.toString(),
            floors: Number(floors),
            rooms: Number(rooms),
            squareMeters: Number(squareMeters),
            price: Number(price),
            priceForHour: Number(priceForHour),
            img1: img1.toString(),
            img2: img2.toString(),
            img3: img3.toString(),
            img4: img4.toString(),
            img5: img5.toString(),
            ownerId: req.session.user._id
        });

        if (existingProduct) {
            res.send(`<script>
            alert('Имотът вече е добавен в количката');
            window.location.href = '/';
            </script>`);
            return;
        }

        const cart = new Cart({
            type: type.toString(),
            location: location.toString(),
            address: address.toString(),
            floors: Number(floors),
            rooms: Number(rooms),
            squareMeters: Number(squareMeters),
            price: Number(price),
            priceForHour: Number(priceForHour),
            img1: img1.toString(),
            img2: img2.toString(),
            img3: img3.toString(),
            img4: img4.toString(),
            img5: img5.toString(),
            ownerId: req.session.user._id
        });

        await cart.save();
        res.redirect('/');
    } catch (e) {
        console.log(e);
    }
}

module.exports = { addToCart };
