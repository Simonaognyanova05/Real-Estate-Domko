const { getUsersWithReservations } = require("./requests/getUsersWithReservations");

module.exports = async (req, res) => {
    const users = await getUsersWithReservations();
    res.render('admin/usersWithReservations', { 
        title: "Резервации | Администратор", 
        layout: 'mainAdmin', 
        admin: req.session.admin,
        users: users
    });
}