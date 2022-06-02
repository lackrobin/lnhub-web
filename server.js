const express = require('express');
const LnurlAuth = require('passport-lnurl-auth');
const passport = require('passport');
const session = require('express-session');

import { handler } from './build/handler.js';

const app = express();

const config = {
	host: 'localhost',
	port: 5000,
	url: null,
};

if (!config.url) {
	config.url = 'http://' + config.host + ':' + config.port;
}

app.use(session({
	secret: '12345',
	resave: true,
	saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

const map = {
	user: new Map(),
};

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	done(null, map.user.get(id) || null);
});

passport.use(new LnurlAuth.Strategy(function(linkingPublicKey, done) {
	let user = map.user.get(linkingPublicKey);
	if (!user) {
		user = { id: linkingPublicKey };
		map.user.set(linkingPublicKey, user);
	}
	done(null, user);
}));

app.use(passport.authenticate('lnurl-auth'));


app.get('/login',
	function(req, res, next) {
		if (req.user) {
			// Already authenticated.
			return res.redirect('/');
		}
		next();
	}, 
	new LnurlAuth.Middleware({
		callbackUrl: config.url + '/login',
		cancelUrl: config.url
	})
);

const server = app.listen(config.port, config.host, function() {
	console.log('Server listening at ' + config.url);
});

process.on('uncaughtException', error => {
	console.error(error);
});

process.on('beforeExit', code => {
	try {
		server.close();
	} catch (error) {
		console.error(error);
	}
	process.exit(code);
});