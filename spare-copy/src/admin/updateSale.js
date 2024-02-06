module.exports = (req, res) => {
    res.render('admin/updateSale', { 
        title: "Редактиране на имот за продажба | Администратор", 
        layout: 'mainAdmin', 
        admin: req.session.admin,
        saleId: req.params.saleId 
    });
}