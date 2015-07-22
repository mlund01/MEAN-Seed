var gulp = require('gulp'),
    config = require('../../config'),
    log = require('../../utils/log'),
    ngAnnotate = require('gulp-ng-annotate');

return gulp.task('annotate', function () {
    log('ADDING ANGULARJS DEPENDENCY INJECTION ANNOTATIONS');

    return gulp
        .src(config.src + '**/*.js')
        .pipe(ngAnnotate({single_quotes: true}))
        .pipe(gulp.dest(config.src));
});
