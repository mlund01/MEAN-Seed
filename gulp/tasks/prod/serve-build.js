var gulp = require('gulp'),
    serve = require('../../utils/serve');

gulp.task('serve-build', ['build'], function() {
    serve(false /* isDev */);
    //TODO: Start watch
});
