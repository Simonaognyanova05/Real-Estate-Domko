const { getContactsData } = require('./requests/getContactsData');

module.exports = async (req, res) => {
    const contactsData = await getContactsData();
    res.render('user/contacts', { 
        title: "Контакти | Домко",
        contactsData: contactsData
    });
}