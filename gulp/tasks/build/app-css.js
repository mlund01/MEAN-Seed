var gulp = require('gulp'),
    config = require('../../config'),
    csso = require('gulp-csso'),
    log = require('../../utils/log');

gulp.task('app-css', ['clean-app-css', 'styles'], function() {
    log('MINIFY AND OPTIMIZE ALL THE APP CSS FILES FOR BUILD');

    return gulp
        .src(config.src + 'styles/app.css')
        .pipe(csso())
        .pipe(gulp.dest(config.build + 'styles/'));
});
