module.exports = (req, res) => {
    res.render('admin/createRent', { title: "Създаване на имот под наеми | Администратор", layout: 'mainAdmin', admin: req.session.admin});
}