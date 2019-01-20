const express = require('express');
const app = express();
const server = app.listen(8000);
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

app.use(express.static(path.resolve('dist')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser('asfgdkaljieaienvonwcnpwefef'));
app.set('trust proxy', 1);
app.use(
	session({
		secret: 'Andrewssecrect', 
		resave: false, 
		saveUninitialized: true, 
		rolling: true,
		name: 'session',
		cookie: {
			secure: false,
			httpOnly: false,
			maxAge: 6000000000 
		} 
	})
);

require('./server/config/routes.js')(app);