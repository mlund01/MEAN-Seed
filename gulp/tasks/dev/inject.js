var gulp = require('gulp'),
    config = require('../../config'),
    fileSort = require('gulp-angular-filesort'),
    log = require('../../utils/log'),
    inject = require('gulp-inject');

gulp.task('inject', ['styles'], function () {
    log('INJECTING CSS AND JS APP DEPENDENCIES INTO INDEX');

    return gulp
        .src(config.index)
        .pipe(inject(
            gulp.src(config.src + '**/*.js')
                .pipe(fileSort()),{ignorePath: config.src.replace('.', '')}))
        .pipe(inject(
            gulp.src(config.src + '**/*.css'), {read: false, ignorePath: config.src.replace('.', '')}))
        .pipe(gulp.dest(config.src));
});
