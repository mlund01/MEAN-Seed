var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    config = require('../../config'),
    log = require('../../utils/log');

gulp.task('build', ['inject-build', 'images', 'fonts'], function() {
    log('FINISHED BUILDING THE APPLICATION FOR PRODUCTION');

//    gulp.watch([].concat(config.allStyles, config.src + '**/*.js', config.src + '**/*.jade'), ['dep'])
//        .on('change', browserSync.reload);
});
