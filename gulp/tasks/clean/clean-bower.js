var gulp = require('gulp'),
    config = require('../../config'),
    clean = require('../../utils/clean');

gulp.task('clean-bower', function (done) {
    clean([config.build + 'js/lib*.js', config.build + 'styles/lib*.css'], done);
});
