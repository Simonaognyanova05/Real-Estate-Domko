const { filterRentsReq } = require("./requests/filterRentsReq")


module.exports = async (req, res) => {
    const fillteredRents = await filterRentsReq(req, res);
    res.render('user/filterRents', {
        title: "Филтрирани данни | Домко",
        fillteredRents: fillteredRents,
})}