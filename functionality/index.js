const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

//user
const userHome = require('./src/user/home');

//admin
const adminHome = require('./src/admin/home');
const adminRegister = require('./src/admin/register');


const app = express();

const hbs = exphbs.create({ extname: 'hbs', defaultLayout: 'main', layoutsDir: path.join(__dirname, 'views/layouts/') });
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use('/content', express.static('static'));
app.get('/', userHome);

app.get('/admin', adminHome);
app.get('/admin/register', adminRegister);

app.listen(3000);