(function () {
    'use strict';

    var del = require('del'),
        log = require('./log'),
        util = require('gulp-util');

    module.exports = function (path, done) {
        log('CLEANING: ' + util.colors.yellow(path));
        del(path, done);
    };

}());
