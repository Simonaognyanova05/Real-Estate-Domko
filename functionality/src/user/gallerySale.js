const { getSaleData } = require("./requests/getSaleData");


module.exports = async (req, res) => {
    const saleData = await getSaleData(req, res);
    res.render('user/gallerySales', { title: "Галерия | Домко", saleData: saleData, user: req.session.user});
}