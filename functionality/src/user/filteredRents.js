const { getFilteredRents } = require('./requests/filteredRents');

module.exports = async (req, res) => {
    const filtered = await getFilteredRents(req, res);
    res.render('user/filteredRents', { 
        title: "Наеми | Домко",
        filtered: filtered,
        user: req.session.user
    });
}