function logoutAdmin(req, res) {
    delete req.session.admin;
    res.redirect('/admin');
}

module.exports = { logoutAdmin };