module.exports = function(app) {

    app.all('/api/*', function(req, res) {
        res.send(404);
    });

    app.get('/partials/*', function(req, res) {
        res.render('../../src/app/' + req.params[0]);
    });

    app.get('*', function(req, res) {
        res.render('index');
    });

};
