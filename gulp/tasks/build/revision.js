//Currently not working

var gulp = require('gulp'),
    config = require('../../config'),
    log = require('../../utils/log'),
    rev = require('gulp-rev'),
    revNapkin = require('gulp-rev-napkin');

gulp.task('revision', ['app-js', 'app-css', 'bower-files'], function() {
    log('REVISIONING BUILD FILES BY ADDING HASH TO FILENAMES');

    return gulp
        .src([config.build + '**/*.js', config.build + '**/*.css'])
        .pipe(rev())
        .pipe(gulp.dest(config.build))
        .pipe(revNapkin())
        .pipe(gulp.dest(config.build));
});
