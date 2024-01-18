module.exports = (req, res) => {
    res.render('admin/reservations', { title: "Резервации | Администратор", layout: 'mainAdmin', admin: req.session.admin});
}