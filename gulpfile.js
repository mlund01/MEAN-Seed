(function () {
    'use strict';

    var requireDir = require('require-dir');

    /* Reqire all tasks, including tasks in subfolders */
    requireDir('./gulp/tasks', { recurse: true });

}());
