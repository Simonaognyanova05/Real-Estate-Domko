module.exports = (req, res) => {
    res.render('admin/contacts', { title: "Контакти | Администратор", layout: 'mainAdmin', admin: req.session.admin});
}