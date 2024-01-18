const { getOwnReservations } = require("./requests/getOwnReservations");

module.exports = async (req, res) => {
    const reservations = await getOwnReservations(req, res);
    res.render('admin/ownReservations', { 
        title: "Потребителски резервации | Администратор", 
        layout: 'mainAdmin', 
        admin: req.session.admin,
        reservations: reservations,
    });
}