const { getRentData } = require("./requests/getRentData");


module.exports = async (req, res) => {
    const rentData = await getRentData(req, res);
    res.render('user/galleryRents', { title: "Галерия | Домко", rentData: rentData, user: req.session.user});
}