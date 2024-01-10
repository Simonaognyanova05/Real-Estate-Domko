module.exports = (req, res) => {
    res.render('admin/login', { title: "Вход за администратор | Администратор", layout: 'mainAdmin'});
}