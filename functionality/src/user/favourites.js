// const { getFavouritesData } = require('./requests/getFavouritesData');

module.exports = async (req, res) => {
    // const favouritesData = await getFavouritesData(req, res);

    res.render('user/favourites', {
        title: "Любими | Домко",
        user: req.session.user,
    });

}