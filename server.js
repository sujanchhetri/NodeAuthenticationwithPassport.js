const express  = require('express');
const app      = express();
const mongoose = require('mongoose');
const passport = require('passport');
const flash    = require('connect-flash');

const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const session      = require('express-session');
const morgan       = require('morgan');
mongoose.connect('mongodb://localhost/databasename', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})

require('./config/passport')(passport); 



app.use(morgan('dev')); 
app.use(cookieParser()); 
app.use(bodyParser()); 

app.set('view engine', 'ejs'); 
app.use(session({ secret: 'nodeisthebest' })); 
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); 



require('./app/routes.js')(app, passport);

app.listen(8000)
