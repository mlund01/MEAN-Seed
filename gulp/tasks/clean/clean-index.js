var gulp = require('gulp'),
    config = require('../../config'),
    clean = require('../../utils/clean');

gulp.task('clean-index', function (done) {
    clean(config.build + '**/*.html', done);
});
