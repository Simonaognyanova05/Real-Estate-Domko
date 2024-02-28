const  {getUserSales} = require('./requests/getUserSales');

module.exports = async (req, res) => {
    const sales = await getUserSales();
    res.render('user-english/sales', { 
        title: "Sales | Домко",
        layout: 'main-english',
        sales: sales,
        // user: req.session.user
    });
}