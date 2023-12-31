const { getAll } = require('./requests/getAll');

module.exports = async (req, res) => {
    const data = await getAll(req, res);
    res.render('admin/catalog', { title: 'Съзадане на администратор', admin: req.session.admin, property: data });
}