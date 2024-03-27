module.exports = async (req, res, rents) => {
    res.render('user/filterRents', {
        title: "Филтрирани данни | Домко",
        rents: rents,
        user: req.session.user
})}