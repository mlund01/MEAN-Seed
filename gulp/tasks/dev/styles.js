var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    config = require('../../config'),
    concat = require('gulp-concat'),
    filter = require('gulp-filter'),
    log = require('../../utils/log'),
    sass = require('gulp-sass');

gulp.task('styles', ['clean-styles'], function() {
    log('COMPILING ALL STYLES INTO APP.CSS');

    var sassFilter = filter(['**/*.sass', '**/*.scss']);

    return gulp
        .src(config.allStyles)
        .pipe(sassFilter)
        .pipe(sass())
        .pipe(sassFilter.restore())
        .pipe(autoprefixer(config.prefixerSettings))
        .pipe(concat('app.css'))
        .pipe(gulp.dest(config.src + 'styles'))
        .pipe(browserSync.stream());
});
