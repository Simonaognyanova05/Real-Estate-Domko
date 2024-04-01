const Handlebars = require('handlebars');
const express = require('express');
const expressSession = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');

const registerController = require('./register');

const app = express();
const hbs = exphbs.create({ extname: 'hbs', defaultLayout: 'main', layoutsDir: path.join(__dirname, 'views/layouts/') });
app.use(express.urlencoded({ extended: true }));
app.use(expressSession({    
    secret: 'secret cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: 'auto' }
}));
Handlebars.registerHelper('eq', (a, b) => a == b);

const dbUrl = 'mongodb+srv://domko:SmaH0gHdPhr1WyhB@domko.yxvsqww.mongodb.net/';

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.use('/content', express.static('static'));

app.get('/', registerController);

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}
const userSchema = new mongoose.Schema({
    username: {type: String},
    password: {type: String}
});
const User = mongoose.model('User', userSchema);

async function sentMessage(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { username, password } = req.body;

    try {
        const messages = new User({
            username, password
        })
        await messages.save();
        res.redirect('/');
    } catch (e) {
        console.log(e);
    }
}

app.post('/register', async (req, res) => {
    await sentMessage(req, res);
})
app.listen(3000);