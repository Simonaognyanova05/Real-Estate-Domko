module.exports = (req, res) => {
    res.render('user/register', { title: 'Потребителска регистрация', user: req.session.user });
}