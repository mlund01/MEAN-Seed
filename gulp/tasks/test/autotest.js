var gulp = require('gulp'),
    startTests = require('../../utils/start-tests');

gulp.task('autotest', function(done) {
    startTests(false /* singleRun */, done);
});
