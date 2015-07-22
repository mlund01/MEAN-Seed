var gulp = require('gulp'),
    config = require('../../config'),
    clean = require('../../utils/clean');

gulp.task('clean-app-js', function (done) {
    clean(config.build + 'js/app*.js', done);
});
