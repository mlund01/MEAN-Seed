var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport');

module.exports = function(app, config, env) {
    switch(env) {
        case 'build':
            console.log('why was i hit?');
            app.use(express.static('./build'));
            break;
        default:
            console.log('*** DEV ***');
            app.set('views', config.rootPath + '/src');
    }
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');

    app.use(logger('dev'));
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(session({secret: 'mean seed unicorns', resave: false, saveUninitialized: false}));
    app.use(passport.initialize());
    app.use(passport.session());

    switch(env) {
        case 'build':
            console.log('*** BUILD ***');
            app.set('views', './build');
            app.use(express.static('./build/'));
            break;
        default:
            console.log('*** DEV ***');
            app.set('views', './src/');
            app.use(express.static(config.rootPath + '/src/'));
            app.use(express.static(config.rootPath + '/bower_components/'));
            break;
    }

};
