module.exports = (req, res) => {
    res.render('user/home', { title: 'Начало | Домко', user: req.session.user});
}