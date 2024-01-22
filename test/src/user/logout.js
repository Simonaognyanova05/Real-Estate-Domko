function logout(req, res) {
    delete req.session.user;
    res.redirect('/');
}

module.exports = { logout };