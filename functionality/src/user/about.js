const { getAboutData } = require('./requests/getAboutData');

module.exports = async (req, res) => {
    const aboutData = await getAboutData();
    res.render('user/about', {
        title: "За нас | Домко",
        aboutData: aboutData
    });
}