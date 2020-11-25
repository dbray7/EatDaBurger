// ==========================================================================================
// Establishing Node dependencies
// ==========================================================================================
var express = require('express');
var bodyParser = require('body-parser');

var app = express();


app.use(express.static(process.cwd() + '/public'));

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));


var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var router = require('./controllers/burgerController.js');
app.use('/', router);

var port = process.env.PORT || 3000;
console.log('App listening on PORT ' + port);
app.listen(port);