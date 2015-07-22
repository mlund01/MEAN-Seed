//Currently not working

var gulp = require('gulp'),
    config = require('../../config'),
    log = require('../../utils/log'),
    rev = require('gulp-rev'),
    revNapkin = require('gulp-rev-napkin'),
    revReplace = require('gulp-rev-replace');

gulp.task('revision', ['index'], function() {
    log('REVISIONING BUILD FILES BY ADDING HASH TO FILENAMES');

    return gulp
        .src([config.build + '**/*.js', config.build + '**/*.css'])
        .pipe(rev())
        .pipe(gulp.dest(config.build))
        .pipe(revNapkin())
        .pipe(rev.manifest())
        .pipe(gulp.dest(config.build));
});

gulp.task('rev-replace', ['revision'], function() {
    log('REPLACE PATH NAMES IN INDEX WITH REVISION NAMES');
    var manifest = gulp.src(config.build + 'rev-manifest.json');

    return gulp
        .src(config.build + '**/*.html')
        .pipe(revReplace({manifest: manifest}))
        .pipe(gulp.dest(config.build));
});
