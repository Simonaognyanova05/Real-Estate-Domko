module.exports = async (req, res, sales) => {
    res.render('user/filterSales', {
        title: "Филтрирани данни | Домко",
        sales: sales,
        user: req.session.user
})}