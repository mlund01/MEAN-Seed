var crypto = require('crypto');

module.exports.createSalt = function() {
    return crypto.getRandomBytes(128).toString('base64');
};

module.exports.hashPassword = function(salt, pwd) {
    var hmac = crypto.createHmac('sha1', salt);
    return hmac.update(pwd).digest('hex');
};
