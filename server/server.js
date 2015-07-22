var express = require('express'),

    env = process.env.NODE_ENV = process.env.NODE_ENV || 'dev',

    app = express(),

    config = require('./config/config.js')[env];

require('./config/express')(app, config, env);

require('./config/mongoose')(config);

require('./config/routes')(app);

app.listen(config.port);
console.log('Listening on port ' + config.port + '...');
