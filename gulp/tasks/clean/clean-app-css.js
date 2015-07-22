var gulp = require('gulp'),
    config = require('../../config'),
    clean = require('../../utils/clean');

gulp.task('clean-app-css', function (done) {
    clean(config.build + 'styles/app*.css', done);
});
