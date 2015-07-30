var gulp = require('gulp'),
    config = require('../../config'),
    log = require('../../utils/log'),
    inject = require('gulp-inject'),
    mainBowerFiles = require('main-bower-files');

gulp.task('inject-dev', ['styles'], function () {
    log('INJECTING CSS AND JS DEPENDENCIES INTO INDEX');

    return gulp
        .src(config.injectionSites)
        .pipe(inject(gulp.src(mainBowerFiles(), {read: false}), {name: 'bower', ignorePath: config.bower}))
        .pipe(inject(gulp.src([].concat(config.js, config.css), {read: false}), {ignorePath: config.src.replace('.', '')}))
        .pipe(gulp.dest(config.server + 'includes/'));
});
