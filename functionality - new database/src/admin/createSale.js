module.exports = (req, res) => {
    res.render('admin/createSale', { title: "Създаване на имот за продажба | Администратор", layout: 'mainAdmin', admin: req.session.admin});
}