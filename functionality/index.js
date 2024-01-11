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
const admincreateRent = require('./src/admin/createRent');
const admincreateSale = require('./src/admin/createSale');


const { createAdmin } = require('./src/admin/requests/registerAdmin');
const { loginAdmin } = require('./src/admin/requests/loginAdmin');
const { aboutAdmin } = require('./src/admin/requests/aboutAdmin');
const { contactsAdmin } = require('./src/admin/requests/contactsAdmin');
const { createRent } = require('./src/admin/requests/createRent');
const { createSale } = require('./src/admin/requests/createSale');


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

app.get('/admin/rent', async (req, res) => {
    await adminRent(req, res);
});
app.get('/admin/sales', adminSales);
app.get('/admin/gallery', adminGallery);
app.get('/admin/contacts', adminContacts);
app.post('/admin/contacts', async (req, res) => {
    await contactsAdmin(req, res);
});

app.get('/admin/register', adminRegister);

app.post('/admin/register', async (req, res) => {
    await createAdmin(req, res);
});

app.get('/admin/login', adminLogin);
app.post('/admin/login', async (req, res) => {
    await loginAdmin(req, res);
});
app.get('/admin/createRent', admincreateRent);
app.post('/admin/createRent', async (req, res) => {
    await createRent(req, res);
});
app.get('/admin/createSale', admincreateSale);
app.post('/admin/createSale', async (req, res) => {
    await createSale(req, res);
});
app.listen(3000);