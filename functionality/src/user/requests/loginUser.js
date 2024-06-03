const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../../models/User');

const dbUrl = 'mongodb+srv://domko:SmaH0gHdPhr1WyhB@domko.yxvsqww.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function loginUser(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (user) {
            const comparedPass = await bcrypt.compare(password, user.hashedPass);

            if (comparedPass) {
                req.session.user = user.toJSON();
                res.redirect('/');
            } else {
                res.send(`<script>
            alert('Невалидни данни');
            window.location.href = '/login';
            </script>`);
            }
        } else {
            
            res.send(`<script>
        
            alert('Невалидни данни');
            window.location.href = '/login';
            </script>`);

        }
    } catch (e) {
        console.log(e);
    }
}

module.exports = { loginUser };
