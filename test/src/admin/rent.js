const { getRents } = require('./requests/getRents');

module.exports = async (req, res) => {
    const rents = await getRents();
    res.render('admin/rent', { 
        title: "Наеми | Администратор", 
        layout: 'mainAdmin', 
        admin: req.session.admin,
        rents: rents
    });
}