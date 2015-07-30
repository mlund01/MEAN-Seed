(function () {
    'use strict';

    var build = './build/',
        index = 'index.jade',
        source = './src/',
        server = './server/',
        root = './';

    module.exports = {
        allFonts: [
            source + 'fonts/**.*'
        ],
        allHTML: [
            source + '**/*.html'
        ],
        allImages: [
            source + 'images/**.*'
        ],
        allJS: [
            source + '/**/*.js',
            './*js',
            './gulp/**/*.js',
            './server/**/*.js'
        ],
        allStyles: [
            source + '**/*.css',
            source + '**/*.sass',
            source + '**/*.scss'
        ],
        build: build,
        bower: 'bower_components',
        css: source + 'styles/app.css',
        index: server + 'views/' + index,
        injectionSites: [
            server + 'includes/scripts.jade',
            server + 'includes/stylesheets.jade'
        ],
        js: [
            source + '**/*.module.js',
            source + '**/*.js',
            '!' + source + '**/*.test.js'
        ],
        packages: [
            './package.json',
            './bower.json'
        ],
        prefixerSettings: {
            browsers: ['last 2 versions']
        },
        src: source,
        server: server,
        templates: [
            source + '**/*.jade',
            '!' + server + 'views/' + index
        ],
        root: root
    };

}());
