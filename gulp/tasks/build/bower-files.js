var gulp = require('gulp'),
    config = require('../../config'),
    concat = require('gulp-concat'),
    csso = require('gulp-csso'),
    log = require('../../utils/log'),
    filter = require('gulp-filter'),
    mainBowerFiles = require('main-bower-files'),
    uglify = require('gulp-uglify');

gulp.task('bower-files', ['clean-bower'], function() {
    log('BUILD LIB.CSS AND LIB.JS FROM BOWER FILES');

    var jsFilter = filter('**/*.js'),
        cssFilter = filter('**/*.css');

    return gulp
        .src(mainBowerFiles())
        .pipe(jsFilter)
        .pipe(concat('lib.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.build + 'js/'))
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe(concat('lib.css'))
        .pipe(csso())
        .pipe(gulp.dest(config.build + 'styles/'))
        .pipe(cssFilter.restore());
});
