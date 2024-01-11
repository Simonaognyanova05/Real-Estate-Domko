module.exports = (req, res) => {
    res.render('admin/updateRent', { title: "Редактиране на имот под наеми | Администратор", layout: 'mainAdmin', admin: req.session.admin, rentId: req.params.rentId});
}