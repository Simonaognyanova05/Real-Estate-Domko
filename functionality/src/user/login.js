module.exports = (req, res) => {
    res.render('user/login', { title: "Вход | Домко", user: req.session.user});
}