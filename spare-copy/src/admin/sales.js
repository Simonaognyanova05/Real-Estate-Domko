const { getSales } = require('./requests/getSales');

module.exports = async (req, res) => {
    const sales = await getSales();
    res.render('admin/sales', { 
        title: "Продажби | Администратор", 
        layout: 'mainAdmin', 
        admin: req.session.admin,
        sales: sales
    });
}
