const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../../models/User');

const dbUrl = 'mongodb+srv://domko:fSSNqd7zySE0aZdW@cluster0.soh1wrl.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}


async function registerUser(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { username, password, email, ages, location, profileImg, interests, rePass } = req.body;

    if (password != rePass) {
        res.send(`<script>
        
        alert('Паролите не съвпадат!');
        window.location.href = '/register';
        </script>`);
        return;
    }
    if (password.length < 6) {
        res.send(`<script>
        
        alert('Паролата трябва да е минимум 6 символа!');
        window.location.href = '/register';
        </script>`);
        return;
    }
    if (username.length < 5) {
        res.send(`<script>
        
        alert('Потребителското име трябва да е минимум 5 символа!');
        window.location.href = '/register';
        </script>`);
        return;
    }

    const hashedPass = await bcrypt.hash(password, 10);
    try {
        const user = new User({
            username, email, hashedPass, ages, location, profileImg, interests
        })
        await user.save();
        req.session.user = user;
        res.redirect('/');
    } catch (e) {
        console.log(e);
    }
}

module.exports = { registerUser };
