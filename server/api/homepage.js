module.exports = function(app, db) {
    app.get('/api/homepage', function(req, res) {
        db.homepage(function(result) {
            if (result === 500) {
                res.status(500).send('Looks like something has broken!');
            } else {
                res.json(result);
            }
        });
    });
};
