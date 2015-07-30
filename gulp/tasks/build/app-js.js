var gulp = require('gulp'),
    config = require('../../config'),
    concat = require('gulp-concat'),
    filter = require('gulp-filter'),
    log = require('../../utils/log'),
    jade = require('gulp-jade'),
    templateCache = require('gulp-angular-templatecache'),
    uglify = require('gulp-uglify');

gulp.task('app-js', ['clean-app-js', 'annotate'], function() {
    log('CONCAT AND MINIFY ALL THE APP JS FILES WITH TEMPLATE CACHE');

    var jadeFilter = filter('**/*.jade');

    return gulp
        .src([].concat(config.js, config.src + '**/*.jade'))
        .pipe(jadeFilter)
        .pipe(jade())
        .pipe(templateCache({module: 'app', moduleSystem: 'IIFE', transformUrl: function(url) {
            return url.replace('.html', '').replace('app', '/partials');
        }}))
        .pipe(jadeFilter.restore())
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest(config.build + 'js/'));
});
