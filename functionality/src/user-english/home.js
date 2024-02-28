module.exports = (req, res) => {
    res.render('user-english/home', { title: 'Начало | Домко', user: req.session.user, layout: 'main-english'});
}