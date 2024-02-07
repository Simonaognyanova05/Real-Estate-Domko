module.exports = (req, res) => {
    res.render('admin/gallery', { title: "Галерия | Администратор", layout: 'mainAdmin', admin: req.session.admin});
}