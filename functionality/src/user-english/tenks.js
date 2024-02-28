module.exports = (req, res) => {
    res.render('user/tenks', { 
        title: "Благодарим Ви | Домко",
        user: req.session.user
    });
}