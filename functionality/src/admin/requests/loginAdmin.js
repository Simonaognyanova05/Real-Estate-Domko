const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('../../models/Admin');

const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function loginAdmin(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { username, password } = req.body;

    try {
        const admin = await Admin.findOne({ username });

        if(admin){
            const comparedPass = await bcrypt.compare(password, admin.hashedPass);

            if(comparedPass){
                req.session.admin = admin.toJSON();
                res.redirect('/admin');
            } else {
                res.send('Невалидни данни!');
            }
        } else {
            res.send('Невалидни данни!');
        }
    } catch (e) {
        console.log(e);
    }
}

module.exports = { loginAdmin };
