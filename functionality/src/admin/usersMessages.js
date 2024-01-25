module.exports = async (req, res) => {
    res.render('admin/messagesAdmin', {
        title: "Потребители със съобщения | Администратор",
        layout: 'mainAdmin', 
        admin: req.session.admin,
    });
}