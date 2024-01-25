const { getOwnMessages } = require("./requests/getOwnMessages");

module.exports = async (req, res) => {
    const messages = await getOwnMessages(req, res);
    
    res.render('admin/ownMessages', { 
        title: "Съобщения от потребители | Администратор", 
        layout: 'mainAdmin', 
        admin: req.session.admin,
        messages
    });
}