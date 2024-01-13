const { getRentData } = require("./requests/getRentData");


module.exports = async (req, res) => {
    const rentData = await getRentData(req, res);
    res.render('user/gallery', { title: "Галерия | Домко", rentData: rentData});
}