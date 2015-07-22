var gulp = require('gulp'),
    config = require('../../config'),
    clean = require('../../utils/clean');

gulp.task('clean-styles', function (done) {
    clean(config.src + 'styles/app.css', done);
});
