const  {getUserSales} = require('./requests/getUserSales');

module.exports = async (req, res) => {
    const sales = await getUserSales();
    res.render('user/sales', { 
        title: "Продажби | Домко",
        sales: sales,
        user: req.session.user
    });
}