const { getCartData } = require('./requests/getCartData');
const getTotalPrice  = require('./requests/getTotalPriceInBag');

module.exports = async (req, res) => {
    const cartData = await getCartData(req, res);
    let totalPrice = await getTotalPrice(req, res);

    res.render('user/bag', {
        title: "Количка | Домко",
        cartData: cartData,
        user: req.session.user,
        totalPrice: totalPrice
    });

}