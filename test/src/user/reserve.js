const { getCartData } = require('./requests/getCartData');

module.exports = async (req, res) => {
    const data = await getCartData(req, res);

    if (Array.isArray(data)) {

        res.render('user/reserve', { title: "Завърване на резервация | Домко", user: req.session.user, data: data });

    } else {
        res.render('user/reserve', { title: "Завърване на резервация | Домко", user: req.session.user, data: data });
    }
}