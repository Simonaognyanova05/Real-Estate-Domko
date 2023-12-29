module.exports = (req, res) => {
    res.render('user/home', { title: 'User Home Page', user: req.session.user });
};