var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.set('view engine','ejs');
app.use('/Style',express.static('Style'))

app.get('/',function(req,res){
    res.render('home_page');
});

app.get('/create',function(req,res){
    res.render('create_contact',{qs:req.query});
});

app.post('/create',urlencodedParser,function(req,res){
    console.log(req.body);
    res.render('create_contact',{qs:req.query});
});

app.get('/edit',function(req,res){
    res.render('edit_contact');
});

app.listen(2000);