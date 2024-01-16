const { getCartData } = require('./requests/getCartData');

module.exports = async (req, res) => {
    const cartData = await getCartData(req, res);

    if (Array.isArray(cartData)) {
        let prices = cartData.map(x => x.priceForHour);
        let totalPrice = prices.reduce((acc, price) => acc + price, 0);

        res.render('user/bag', { 
            title: "Количка | Домко",
            cartData: cartData,
            user: req.session.user,
            totalPrice: totalPrice
        });
    } else {
        console.error('cartData is not an array');
        res.render('user/bag', { 
            title: "Количка | Домко",
            cartData: [], // Подаване на празен масив в случай на проблем
            user: req.session.user,
            totalPrice: 0
        });
    }
}