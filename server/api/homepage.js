module.exports = function(app, db) {
    app.get('/api/homepage', function(req, res) {
        db.homepage(function(json) {
            res.json(json);
        });
    });
};
