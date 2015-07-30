var gulp = require('gulp'),
    startTests = require('../../utils/start-tests');

gulp.task('test', ['vet'], function(done) {
    startTests(true /* singleRun */, done);
});
