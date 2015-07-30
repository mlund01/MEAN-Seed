(function () {
    'use strict';

    var gulp = require('gulp'),
        config = require('../../config'),
        log = require('../../utils/log'),
        jshint = require('gulp-jshint'),
        jscs = require('gulp-jscs');

    gulp.task('vet', function () {
        log('TESTS ALL JAVASCRIPT FILES WITH JSHINT AND JSCS');

        return gulp
            .src(config.allJS)
            .pipe(jshint())
            .pipe(jscs())
            .pipe(jshint.reporter('jshint-stylish', {verbose: true}))
            .pipe(jshint.reporter('fail'));
    });

}());

