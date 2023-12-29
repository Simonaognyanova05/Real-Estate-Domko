module.exports = (req, res) => {
    if(req.session.admin){
        res.render('admin/home', { title: 'Недвижими имоти "Домко"', admin: req.session.admin });
    }else{
        res.render('admin/login', { title: 'Недвижими имоти "Домко"', admin: req.session.admin });
    }
}