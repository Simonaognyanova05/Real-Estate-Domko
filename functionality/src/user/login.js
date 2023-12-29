module.exports = (req, res) => {
    res.render('user/login', { title: 'Влизане на потребител', user: req.session.user });
}