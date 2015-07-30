(function () {
    'use strict';

    var gulp = require('gulp'),
        browserSync = require('browser-sync'),
        config = require('../../config'),
        log = require('../../utils/log');

    gulp.task('dev', ['test', 'annotate', 'inject-dev'], function () {
        log('FINISHED BUILDING THE APPLICATION FOR DEVELOPEMENT');

        gulp.watch(config.allStyles, ['styles']);
        gulp.watch([config.src + '**/*.jade', config.src + '**/*.js'])
            .on('change', browserSync.reload);
    });

}());
