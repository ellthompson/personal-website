module.exports = function(app, db) {
    app.get('/api/blogposts', function(req, res) {
        db.blogposts(function(result) {
            if (result == 500) {
                res.status(500).send('Looks like something has broken!');
            } else {
                res.json(result);
            }
        });
    });
};
