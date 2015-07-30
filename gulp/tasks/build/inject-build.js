var gulp = require('gulp'),
    config = require('../../config'),
    log = require('../../utils/log'),
    inject = require('gulp-inject');

gulp.task('inject-build', ['revision'], function() {
    log('INJECT DEPENDENCIES INTO THE APPLICATION');

    return gulp
        .src(config.injectionSites)
        .pipe(inject(gulp.src([config.build + 'js/lib*.js', config.build + 'styles/lib*.css'], {read: false}), {name: 'bower', ignorePath: config.build.replace('.', '')}))
        .pipe(inject(gulp.src([config.build + 'js/app*.js', config.build + 'styles/app*.css'], {read: false}), {ignorePath: config.build.replace('.', '')}))
        .pipe(gulp.dest(config.server + 'includes/'));
});
