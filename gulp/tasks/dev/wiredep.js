var gulp = require('gulp'),
    config = require('../../config'),
    log = require('../../utils/log'),
    wiredep = require('wiredep').stream;

gulp.task('wiredep', ['inject'], function () {
    log('INJECTING CSS AND JS BOWER DEPENDENCIES INTO INDEX');

    return gulp
        .src(config.index)
        .pipe(wiredep({ignorePath: '../bower_components'}))
        .pipe(gulp.dest(config.src));
});
