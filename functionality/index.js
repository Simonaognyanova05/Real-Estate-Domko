const express = require('express');
const expressSession = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');

//user
const userHome = require('./src/user/home');
const userRegister = require('./src/user/register');
const userLogin = require('./src/user/login');
const { registerUser } = require('./src/user/requests/register');
const { loginUser } = require('./src/user/requests/login');


//admin
const adminHome = require('./src/admin/home');
const adminRegister = require('./src/admin/register');
const adminLogin = require('./src/admin/login');

const { registerAdmin } = require('./src/admin/requests/register');
const { loginAdmin } = require('./src/admin/requests/login');
const { logoutUser } = require('./src/user/logout');
const { logoutAdmin } = require('./src/admin/logout');


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
app.post('/user/register', async (req, res) => {
    await registerUser(req, res);
});
app.get('/user/login', userLogin);
app.post('/user/login', async (req, res) => {
    await loginUser(req, res);
});
app.get('/user/logout', (req, res) => {
    logoutUser(req, res);
})


app.get('/admin', adminHome);
app.get('/admin/register', adminRegister);

app.post('/admin/register', async (req, res) => {
    await registerAdmin(req, res);
});

app.get('/admin/login', adminLogin);
app.post('/admin/login', async (req, res) => {
    await loginAdmin(req, res)
});
app.get('/admin/logout', (req, res) => {
    logoutAdmin(req, res);
})



app.listen(3000);