module.exports = function(app, db) {
    app.get('/api/blogposts', function(req, res) {
        db.blogposts(function(json) {
            res.json(json);
        });
    });
};
