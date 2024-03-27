module.exports = (req, res) => {
    res.render('user/welcome', {
        title: 'Добре дошли | Домко',
        layout: 'welcome'
    })
}