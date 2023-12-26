const express = require('express');
const expressSession = require('express-session');
const hbs = require('express-handlebars');
const handlebars = require('handlebars');

const homeController = require('./src/home');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(expressSession({
    secret: 'secret cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: 'auto' }
}));

app.engine('.hbs', hbs.create({
    extname: '.hbs'
}).engine);

app.set('view engine', '.hbs');
app.use('/content', express.static('static'));

app.get('/', homeController)

app.listen(3000);