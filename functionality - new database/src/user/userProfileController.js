module.exports = async (req, res) => {
    res.render('user/userProfile', { 
        title: "Потребител | Домко",
        user: req.session.user
    });
}