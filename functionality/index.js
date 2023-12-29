const express = require('express');
const expressSession = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');

//user
const userHome = require('./src/user/home');
const userRegister = require('./src/user/register');

//admin
const adminHome = require('./src/admin/home');
const adminRegister = require('./src/admin/register');
const adminLogin = require('./src/admin/login');

const { registerAdmin } = require('./src/admin/requests/register');
const { loginAdmin } = require('./src/admin/requests/login');


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(expressSession({
    secret: 'secret cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: 'auto' }
}));

const hbs = exphbs.create({ extname: 'hbs', defaultLayout: 'main', layoutsDir: path.join(__dirname, 'views/layouts/') });
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use('/content', express.static('static'));

app.get('/', userHome);
app.get('/user/register', userRegister);


app.get('/admin', adminHome);
app.get('/admin/register', adminRegister);

app.post('/admin/register', async (req, res) => {
    await registerAdmin(req, res);
});

app.get('/admin/login', adminLogin);
app.post('/admin/login', async (req, res) => {
    await loginAdmin(req, res)
});


app.listen(3000);