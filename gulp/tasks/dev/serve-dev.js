var gulp = require('gulp'),
    serve = require('../../utils/serve');

gulp.task('serve-dev', ['dev'], function() {
    serve(true /* isDev */);
    //TODO: Start watch
});
