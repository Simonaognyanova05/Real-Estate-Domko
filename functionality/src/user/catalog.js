const { getAll } = require('./requests/getAll');


//
module.exports = async (req, res) => {
    const data = await getAll(req, res);
    res.render('user/catalog', { title: 'Съзадане на администратор', user: req.session.user, property: data });
}