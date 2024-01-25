module.exports = async (req, res) => {
    res.render('admin/messagesAdmin', {
        title: "Ппотребители със съобщения | Администратор",
        admin: req.session.admin
    });
}