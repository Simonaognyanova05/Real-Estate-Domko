const { getUsersWithMessages } = require("./requests/getUsersWithMessages");

module.exports = async (req, res) => {
    const users = await getUsersWithMessages(req, res);

    res.render('admin/messagesAdmin', {
        title: "Потребители със съобщения | Администратор",
        layout: 'mainAdmin', 
        admin: req.session.admin,
        users: users
    });
}