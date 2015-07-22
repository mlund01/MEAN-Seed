var gulp = require('gulp'),
    config = require('../../config'),
    fileSort = require('gulp-angular-filesort'),
    log = require('../../utils/log'),
    inject = require('gulp-inject'),
    wiredep = require('wiredep').stream;

gulp.task('index', ['clean-index', 'app-js', 'app-css', 'bower-files', 'images', 'fonts'], function() {
    return gulp
        .src(config.index)
        .pipe(inject(
            gulp.src(config.build + '**/*.js')
                .pipe(fileSort())))
        .pipe(inject(
            gulp.src([config.build + 'styles/lib.css', config.build + 'styles/app.css']), {read: false}))
        .pipe(wiredep({dependencies: false}))
        .pipe(gulp.dest(config.build));
});
