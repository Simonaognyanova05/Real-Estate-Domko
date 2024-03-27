module.exports = (req, res) => {
    if (req.session.admin) {
        res.render('admin/home', { title: 'Начало | Администратор', layout: 'mainAdmin', admin: req.session.admin });
    } else {
        res.render('admin/login', { title: "Вход за администратор | Администратор", layout: 'mainAdmin'});

    }
}