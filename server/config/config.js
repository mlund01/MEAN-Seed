var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    dev: {
        db: 'mongodb://localhost/MEAN-Seed',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    prod: {
        db: 'mongodb://cobrien:mean-seed@ds047622.mongolab.com:47622/mean-seed',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
};
