module.exports = (req, res) => {
    res.render('admin/register', { title: "Създаване на администратор | Администратор", layout: 'mainAdmin', admin: req.session.admin});
}