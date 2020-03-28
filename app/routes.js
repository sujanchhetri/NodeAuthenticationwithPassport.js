module.exports = function(app, passport) {
// =======================HOME-PAGE ===============================
 app.get('/', function(req, res) {
res.render('index.ejs'); // load the index.ejs file
});
// ==========================LOGIN ===============================
app.get('/login', function(req, res) {
res.render('login.ejs', { message: req.flash('loginMessage') }); 
});

// =====================SIGNUP ==============================
app.get('/signup', function(req, res) {
res.render('signup.ejs', 
{ message: req.flash('signupMessage') });
});

 //==========================profile =====================      
app.get('/profile', isLoggedIn, function(req, res) {
res.render('profile.ejs', {
user : req.user
});
});
// LOGOUT 
app.get('/logout', function(req, res) {
req.logout();
res.redirect('/');
});

// process the signup form
app.post('/signup', passport.authenticate('local-signup', {
successRedirect : '/profile', //redirect to the secure profile section
failureRedirect : '/signup', // redirect back to the signup page if there is an error
failureFlash : true // allow flash messages
}));

 // process the login form
app.post('/login', passport.authenticate('local-login',{
successRedirect : '/profile', //redirect to the secure profile section
failureRedirect : '/login', // redirect back to the signup page if there is an error
failureFlash : true // allow flash messages
}));

};

 // makes sure a user is logged in
function isLoggedIn(req, res, next){

// if user is authenticated in the session, carry on 
if (req.isAuthenticated())
return next();

// if they aren't redirect them to the home page
res.redirect('/');
}