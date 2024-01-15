const {getCartData} = require('./requests/getCartData');


module.exports = async (req, res) => {
    const cartData = await getCartData(req, res);
    res.render('user/bag', { 
        title: "Количка | Домко",
        cartData: cartData,
        user: req.session.user
    });
}