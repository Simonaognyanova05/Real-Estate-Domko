module.exports = (req, res) => {
    res.render('admin/about', { title: "За нас | Администратор", layout: 'mainAdmin', admin: req.session.admin});
}