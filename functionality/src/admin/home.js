module.exports = (req, res) => {
    res.render('admin/home', { title: 'Начало | Администратор', layout: 'mainAdmin', admin: req.session.admin});
}