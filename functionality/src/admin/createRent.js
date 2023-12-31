module.exports = (req, res) => {
    res.render('admin/createRent', { title: 'Недвижими имоти "Домко"', admin: req.session.admin });
}