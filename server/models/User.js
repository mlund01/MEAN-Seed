var mongoose = require('mongoose'),
    encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
    firstName: {type: String, required: '{PATH} is required'},
    lastName: {type: String, required: '{PATH} is required'},
    username: {type: String, required: '{PATH} is required', unique: true},
    email: {type: String, required: '{PATH} is required', unique: true},
    phone: {type: String},
    salt: {type: String, required: '{PATH} is required'},
    password: {type: String, required: '{PATH} is required'}
});

userSchema.methods = {
    authenticate: function(pwd) {
        return encrypt.hashPassword(this.salt, pwd) === this.password;
    }
};

var User = mongoose.model('User', userSchema);

function createDefaultUser() {
    User.find({}).exec(function(error, collection) {
        if (collection.length === 0) {
            var salt,
                password;
            salt = encrypt.createSalt();
            password = encrypt.hashPassword(salt, 'password');
            User.create({firstName: 'Connor', lastName: "O'Brien", username: 'cobrien', email: 'cobrien.js@gmail.com', phone: '9523032456', salt: salt, password: password});
        }
    });
}

module.exports.createDefaultUser = createDefaultUser;
