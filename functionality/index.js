const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

const hbs = exphbs.create({ extname: 'hbs', defaultLayout: 'main', layoutsDir: path.join(__dirname, 'views/layouts/') });
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('user/home', { title: 'User Home Page' });
});

app.get('/admin', (req, res) => {
    res.render('admin/home', { title: 'Admin Home Page' });
});

app.listen(3000);