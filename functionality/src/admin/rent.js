module.exports = (req, res) => {
    res.render('admin/rent', { title: "Наеми | Администратор", layout: 'mainAdmin', admin: req.session.admin});
}