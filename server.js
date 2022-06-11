
import express from 'express';
import LnurlAuth from "passport-lnurl-auth"
import passport from 'passport'
import session from 'express-session';

import {handler} from './build/handler.js';

const app = express();
process.on('SIGINT', function () { process.exit(); }); // Ctrl+C  
process.on('SIGTERM', function () { process.exit(); }); // docker stop

const config = {
	dockerHost: '0.0.0.0',
	dockerPort: 3000,
	dockerUrl: null,
	host: "https://lnhub.info",
};

if (!config.dockerUrl) {
	config.dockerUrl = 'http://' + config.dockerHost + ':' + config.dockerPort;
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
		callbackUrl: config.host + '/login',
		cancelUrl: config.host,
		uriSchemaPrefix: 'LIGHTNING:',
		loginTemplateFilePath: './login-template.html',
		refreshSeconds: 5,
		title: "Login to LNHub with LNURL-Auth",
		instruction: 'Scan the QR code to login',
	})
);

app.post('/logout', function(req, res){
	req.logout();
	res.redirect('/');
  });


app.get("/user",  function(req,res){
	res.json({user: req.user})
})

app.use(handler)

const server = app.listen(config.dockerPort, config.dockerHost, function() {
	console.log('Server listening at ' + config.dockerUrl);
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