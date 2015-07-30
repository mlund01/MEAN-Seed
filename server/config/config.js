var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    dev: {
        db: 'mongodb://localhost/MEAN-Seed',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    build: {
        db: 'mongodb://cobrien:meanseed@ds031947.mongolab.com:31947/mean-seed',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
};
