var gulp = require('gulp'),
    config = require('../../config'),
    clean = require('../../utils/clean');

gulp.task('clean-fonts', function (done) {
    clean(config.build + 'assets/fonts/**/*', done);
});
