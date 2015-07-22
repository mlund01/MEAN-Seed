module.exports = function(app) {

    app.all('/api/*', function(req, res) {
        res.send(404);
    });

    app.get('/app/*', function(req, res) {
        console.log('TEST App');
        res.render('app/' + req.params[0]);
    });

    app.get('*', function(req, res) {
        res.render('index', {title: 'ejs'});
    });

};
