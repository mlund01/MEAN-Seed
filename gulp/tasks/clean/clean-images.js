var gulp = require('gulp'),
    config = require('../../config'),
    clean = require('../../utils/clean');

gulp.task('clean-images', function (done) {
    clean(config.build + 'assets/images/**/*', done);
});
