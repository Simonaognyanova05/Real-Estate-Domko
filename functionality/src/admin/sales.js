module.exports = (req, res) => {
    res.render('admin/sales', { title: "Продажби | Администратор", layout: 'mainAdmin', admin: req.session.admin});
}