module.exports = (req, res) => {
    res.render('user/login', { title: "Вход за администратор | Администратор", user: req.session.user});
}