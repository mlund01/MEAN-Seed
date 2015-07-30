(function() {
    'use strict';

    var karma = require('karma').server,
        config = require('../config');

    module.exports = function(singleRun, done) {
        karma.start({
            configFile: __dirname + '/../../karma.conf.js',
            singleRun: !!singleRun
        }, function() {
            done();
        });
    };

}());
