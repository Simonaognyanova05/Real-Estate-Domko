module.exports = (req, res) => {
    res.render('user/reserve', { title: "Завърване на резервация | Домко", user: req.session.user});
}