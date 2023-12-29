module.exports = (req, res) => {
    res.render('admin/home', { title: 'Недвижими имоти "Домко"', admin: req.session.admin });
}