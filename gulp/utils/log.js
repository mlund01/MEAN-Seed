(function () {
    'use strict';

    var util = require('gulp-util');

    module.exports = function (msg) {
        if (typeof msg === 'object') {
            for (var item in msg) {
                if (msg.hasOwnProperty(item)) {
                    util.log(util.colors.green(msg[item]));
                }
            }
        } else {
            util.log(util.colors.green(msg));
        }
    };

}());
