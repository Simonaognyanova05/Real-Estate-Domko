function logoutUser(req, res) {
    delete req.session.user;
    res.redirect('/');
}

module.exports = { logoutUser };