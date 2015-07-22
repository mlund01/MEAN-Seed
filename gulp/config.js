(function () {
    'use strict';

    var build = './build/',
        index = './src/index.html',
        source = './src/',
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
        index: index,
        packages: [
            './package.json',
            './bower.json'
        ],
        prefixerSettings: {
            browsers: ['last 2 versions']
        },
        src: source,
        templates: [
            source + '**/*.jade',
            '!' + index
        ],
        root: root
    };

}());
