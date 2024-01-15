module.exports = (req, res) => {
    res.render('user/register', { title: "Регистрация | Домко", user: req.session.user});
}