var gulp = require('gulp'),
    config = require('../../config'),
    log = require('../../utils/log');

gulp.task('fonts', ['clean-fonts'], function() {
    log('MOVING OVER FONTS');

    return gulp
        .src(config.src + 'assets/fonts/**/*')
        .pipe(gulp.dest(config.build));
});
