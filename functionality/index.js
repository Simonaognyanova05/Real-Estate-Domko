const Handlebars = require('handlebars');
const express = require('express');
const expressSession = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');

//user
const userHome = require('./src/user/home');
const userAbout = require('./src/user/about');
const userRent = require('./src/user/rent');
const userSales = require('./src/user/sales');
const userGalleryRents = require('./src/user/galleryRents');
const userGallerySales = require('./src/user/gallerySale');
const userContacts = require('./src/user/contacts');
const userBag = require('./src/user/bag');
const userReserve = require('./src/user/reserve');
const userRegister = require('./src/user/register');
const userLogin = require('./src/user/login');



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
const updateRent = require('./src/admin/updateRent');
const updateSale = require('./src/admin/updateSale');
const usersWithReservations = require('./src/admin/usersWithReservations');

const { adminDeleteRent } = require('./src/admin/adminDeleteRent');
const { createAdmin } = require('./src/admin/requests/registerAdmin');
const { loginAdmin } = require('./src/admin/requests/loginAdmin');
const { aboutAdmin } = require('./src/admin/requests/aboutAdmin');
const { contactsAdmin } = require('./src/admin/requests/contactsAdmin');
const { createRent } = require('./src/admin/requests/createRent');
const { createSale } = require('./src/admin/requests/createSale');
const { deleteRentReq } = require('./src/admin/requests/deleteRentReq');
const { adminDeleteSale } = require('./src/admin/adminDeleteSale');
const { deleteSaleReq } = require('./src/admin/requests/deleteSaleReq');
const { updateRentReq } = require('./src/admin/requests/updateRentReq');
const { updateSaleReq } = require('./src/admin/requests/updateSaleReq');
const { addToCart } = require('./src/user/requests/addToCart');
const { removeFromCart } = require('./src/user/requests/removeFromCart');
const { userRemoveItem } = require('./src/user/userRemoveItem');
const { registerUser } = require('./src/user/requests/registerUser');
const { loginUser } = require('./src/user/requests/loginUser');
const { logout } = require('./src/user/logout');
const { logoutAdmin } = require('./src/admin/logout');
const { reservation } = require('./src/user/requests/reservation');
const ownReservations = require('./src/admin/ownReservations');
const { checkReservation } = require('./src/admin/checkReservation');
const { checkReservationReq } = require('./src/admin/requests/checkReservationReq');


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


app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.use('/content', express.static('static'));

//user
app.get('/', userHome);
app.get('/about', async (req, res) => {
    await userAbout(req,res);
});

app.get('/rent', async (req, res) => {
    await userRent(req, res);
});
app.get('/sales', userSales);
app.get('/rent/gallery/:rentId', userGalleryRents);
app.get('/sales/gallery/:saleId', userGallerySales);
app.post('/addToCart', async(req, res) => {
    await addToCart(req, res);
})

app.get('/contacts', async (req, res) => {
    await userContacts(req, res);
});
app.get('/register', userRegister);
app.post('/user/register', async(req, res)  => {
    await registerUser(req, res);
});
app.get('/login', userLogin);
app.post('/user/login', async(req, res)  => {
    await loginUser(req, res);
});
app.get('/logout', (req, res) => {
    logout(req, res);
});
app.get('/bag', userBag);
app.get('/removeFromCart/:itemId', userRemoveItem)
app.delete('/removeFromCart/:itemId', async (req, res) => {
    await removeFromCart(req, res);
});

app.get('/reserve', async (req, res) => await userReserve(req, res));
app.post('/user/reserve', async (req, res) => await reservation(req, res));

//admin
app.get('/admin', adminHome);
app.get('/admin/about', adminAbout);
app.post('/admin/about', async (req, res) => {
    await aboutAdmin(req, res);
});

app.get('/admin/rent', async (req, res) => {
    await adminRent(req, res);
});
app.get('/admin/sales', async (req, res) => {
    await adminSales(req, res);
});
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
app.get('/admin/logout', (req, res) => {
    logoutAdmin(req, res);
});
app.get('/admin/createRent', admincreateRent);
app.post('/admin/createRent', async (req, res) => {
    await createRent(req, res);
});
app.get('/admin/createSale', admincreateSale);
app.post('/admin/createSale', async (req, res) => {
    await createSale(req, res);
});
app.get('/deleteRent/:rentId', (req, res) => {
    adminDeleteRent(req, res);
});
app.delete('/deleteRent/:rentId', async (req, res) => {
    await deleteRentReq(req, res);
});
app.get('/deleteSale/:saleId', (req, res) => {
    adminDeleteSale(req, res);
});
app.delete('/deleteSale/:saleId', async (req, res) => {
    await deleteSaleReq(req, res);
});
app.get('/admin/updateRent/:rentId', updateRent);
app.post('/admin/updateRent/:rentId', async (req, res) => {
    await updateRentReq(req, res);
});

app.get('/admin/updateSale/:saleId', updateSale);
app.post('/admin/updateSale/:saleId', async (req, res) => {
    await updateSaleReq(req, res);
});
app.get('/admin/usersWithReservations', async (req, res) => await usersWithReservations(req, res));
app.get('/visit/reservation/:userId', async (req, res) => await ownReservations(req, res));
app.get('/check/reservation/:userId',  (req, res) =>  checkReservation(req, res));
app.delete('/check/reservation/:userId',  async (req, res) => await checkReservationReq(req, res));


app.listen(3000);