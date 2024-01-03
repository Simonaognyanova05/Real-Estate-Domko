const express = require('express');
const expressSession = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');

const userHome = require('./src/user/home');
const userAbout = require('./src/user/about');
const userRent = require('./src/user/rent');
const userSales = require('./src/user/sales');
const userGallery = require('./src/user/gallery');
const userContacts = require('./src/user/contacts');

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

app.get('/', userHome);
app.get('/about', userAbout);
app.get('/rent', userRent);
app.get('/sales', userSales);
app.get('/gallery', userGallery);
app.get('/contacts', userContacts);

app.listen(3000);