var express = require('express');
var methodOverride = require('method-override')
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({ defaultLayout: 'main.handlebars' }));

app.set('view engine', 'handlebars');

// Import routes and give the server access to them
var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});