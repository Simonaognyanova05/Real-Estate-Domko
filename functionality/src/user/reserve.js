const { getCartData } = require('./requests/getCartData');

module.exports = async (req, res) => {
    const data = await getCartData(req, res);

    if (Array.isArray(data)) {
        let ids = data.map(x => x._id);

        res.render('user/reserve', { title: "Завърване на резервация | Домко", user: req.session.user, ids: ids });

    } else {
        res.render('user/reserve', { title: "Завърване на резервация | Домко", user: req.session.user, data: data, ids: [] });
    }
}