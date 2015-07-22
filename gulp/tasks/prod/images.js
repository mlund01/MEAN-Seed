var gulp = require('gulp'),
    config = require('../../config'),
    log = require('../../utils/log'),
    imagemin = require('gulp-imagemin');

gulp.task('images', ['clean-images'], function() {
    log('MOVING OVER IMAGES AND MINIFYING THEM');

    return gulp
        .src(config.src + 'assets/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest(config.build));
});
