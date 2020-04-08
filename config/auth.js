module.exports = {

'facebookAuth' : {
	'clientID' : 'your-secret-clientID-here', // your App ID
	'clientSecret' : 'your-client-secret-here', // your App Secret
	'callbackURL' : 'http://localhost:8000/auth/facebook/callback'
},

'twitterAuth' : {
	'consumerKey' : 'your-consumer-key-here',
	'consumerSecret' : 'your-client-secret-here',
	'callbackURL' : 'http://localhost:8000/auth/twitter/callback'
},

'googleAuth' : {
	'clientID' : 'your-secret-clientID-here',
	'clientSecret' : 'your-client-secret-here',
	'callbackURL' : 'http://localhost:8000/auth/google/callback'
}

};