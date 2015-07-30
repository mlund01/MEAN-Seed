var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport');

module.exports = function(app, config, env) {

    app.set('views', config.rootPath + 'server/views');

    app.set('view engine', 'jade');
    app.use(logger('dev'));
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(session({secret: 'mean seed unicorns', resave: false, saveUninitialized: false}));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.static(config.rootPath + '/server/favicon/'));

    switch(env) {
        case 'build':
            console.log('*** BUILD ***');
            app.use(express.static(config.rootPath + '/build/'));
            break;
        default:
            console.log('*** DEV ***');
            app.use(express.static(config.rootPath + '/src/'));
            app.use(express.static(config.rootPath + '/bower_components/'));
            break;
    }

};
