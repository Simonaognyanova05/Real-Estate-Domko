const {getCartData} = require('./requests/getCartData');


module.exports = async (req, res) => {
    const cartData = await getCartData();
    res.render('user/bag', { 
        title: "Количка | Домко",
        cartData: cartData,
    });
}