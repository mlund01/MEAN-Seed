(function () {
    'use strict';

    var nodemon = require('gulp-nodemon'),
        browserSync = require('browser-sync'),
        config = require('../config'),
        gulp = require('gulp'),
        log = require('../utils/log'),
        port = process.env.PORT || 7203;

    function startBrowerSync (isDev) {
        if (browserSync.active) {
            return;
        }

        browserSync({
            proxy: 'localhost:' + port,
            port: 3000,
            ghostMode: {
                clicks: true,
                forms: true,
                scroll: true
            },
            injectChanges: true,
            logFileChanges: true
        });
    }

    module.exports = function(isDev) {
        return nodemon ({
            script: './server/server.js',
            delayTime: 1,
            env: {
                'PORT': port,
                'NODE_ENV': isDev ? 'dev' : 'build'
            },
            watch: ['./server/']
        })
        .on('start', function() {
            log('*** NODEMON STARTED ***');
            startBrowerSync();
        })
        .on('restart', function(env) {
            log('*** NODEMON RESTARTED ***');
            log('*** FILES CHANGED ON RESTART: ***\n' + env);
            setTimeout(function() {
                browserSync.notify('*** RELOADING NOW ***');
                browserSync.reload({stream: false});
            }, 1000);
        })
        .on('crash', function() {
            log('*** NODEMON CRASHED ***');
        })
        .on('exit', function() {
            log('*** NODEMON EXITED ***');
        });
    };

}());
