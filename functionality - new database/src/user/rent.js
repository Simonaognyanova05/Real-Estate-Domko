const { getUserRents } = require('./requests/getUserRents');

module.exports = async (req, res) => {
    const rents = await getUserRents();
    res.render('user/rent', { 
        title: "Наеми | Домко",
        rents: rents,
        user: req.session.user
    });
}