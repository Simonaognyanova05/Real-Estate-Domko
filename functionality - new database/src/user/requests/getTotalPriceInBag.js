const { getCartData } = require('../requests/getCartData');

module.exports = async (req, res) => {
    const cartData = await getCartData(req, res);

    if (Array.isArray(cartData)) {
        let prices = cartData.map(x => x.priceForHour);
        let totalPrice = prices.reduce((acc, price) => acc + price, 0);

       return totalPrice;
    } else {
        console.error('cartData is not an array');
        totalPrice = 0;

        return totalPrice;
    }
}