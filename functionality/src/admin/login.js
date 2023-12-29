module.exports = (req, res) => {
    res.render('admin/login', { title: 'Съзадане на администратор', admin: req.session.admin });
}