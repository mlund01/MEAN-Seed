var gulp = require('gulp'),
    config = require('../../config'),
    concat = require('gulp-concat'),
    filter = require('gulp-filter'),
    log = require('../../utils/log'),
    templateCache = require('gulp-angular-templatecache'),
    uglify = require('gulp-uglify');

gulp.task('app-js', ['clean-app-js', 'annotate'], function() {
    log('CONCAT AND MINIFY ALL THE APP JS FILES WITH TEMPLATE CACHE');

    var htmlFilter = filter('**/*.html');

    return gulp
        .src([config.src + '**/*.js', config.src + '**/*.jade', '!' + config.index])
        .pipe(htmlFilter)
        .pipe(templateCache({module: 'app', standalone: false, moduleSystem: 'IIFE'}))
        .pipe(htmlFilter.restore())
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest(config.build + 'js/'));
});
