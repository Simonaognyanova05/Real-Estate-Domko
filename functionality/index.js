const express = require('express');
const expressSession = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');

//user
const userHome = require('./src/user/home');
const userAbout = require('./src/user/about');
const userRent = require('./src/user/rent');
const userSales = require('./src/user/sales');
const userGallery = require('./src/user/gallery');
const userContacts = require('./src/user/contacts');
const userBag = require('./src/user/bag');
const userReserve = require('./src/user/reserve');


//admin
const adminHome = require('./src/admin/home');
const adminAbout = require('./src/admin/about');
const adminRent = require('./src/admin/rent');
const adminSales = require('./src/admin/sales');
const adminGallery = require('./src/admin/gallery');
const adminContacts = require('./src/admin/contacts');
const adminRegister = require('./src/admin/register');
const adminLogin = require('./src/admin/login');
const { createAdmin } = require('./src/admin/requests/registerAdmin');
const { loginAdmin } = require('./src/admin/requests/loginAdmin');
const { aboutAdmin } = require('./src/admin/requests/aboutAdmin');


const app = express();

const hbs = exphbs.create({ extname: 'hbs', defaultLayout: 'main', layoutsDir: path.join(__dirname, 'views/layouts/') });
app.use(express.urlencoded({ extended: true }));
app.use(expressSession({
    secret: 'secret cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: 'auto' }
}));


app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.use('/content', express.static('static'));

//user
app.get('/', userHome);
app.get('/about', userAbout);
app.get('/rent', userRent);
app.get('/sales', userSales);
app.get('/gallery', userGallery);
app.get('/contacts', userContacts);
app.get('/bag', userBag);
app.get('/reserve', userReserve);

//admin
app.get('/admin', adminHome);
app.get('/admin/about', adminAbout);
app.post('/admin/about', async (req, res) => {
    await aboutAdmin(req, res);
});

app.get('/admin/rent', adminRent);
app.get('/admin/sales', adminSales);
app.get('/admin/gallery', adminGallery);
app.get('/admin/contacts', adminContacts);
app.get('/admin/register', adminRegister);

app.post('/admin/register', async (req, res) => {
    await createAdmin(req, res);
});

app.get('/admin/login', adminLogin);
app.post('/admin/login', async (req, res) => {
    await loginAdmin(req, res);
});


app.listen(3000);