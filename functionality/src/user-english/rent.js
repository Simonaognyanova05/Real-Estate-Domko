const { getUserRents } = require('./requests/getUserRents');

module.exports = async (req, res) => {
    const rents = await getUserRents();
    res.render('user-english/rent', { 
        title: "Rents | Domko",
        layout: 'main-english',
        rents: rents,
        // user: req.session.user
    });
}