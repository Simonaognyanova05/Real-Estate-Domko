module.exports = (req, res) => {
    res.render('user/register', { title: "Регистрация | Домко", layout: 'mainAdmin', user: req.session.user});
}