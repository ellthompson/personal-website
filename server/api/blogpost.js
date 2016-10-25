module.exports = function(app, db) {
    app.get('/api/blogpost/:slug', function(req, res) {
        var slug = req.params.slug;
        db.blogpost(slug, function(result) {
            if (result === 500) {
                res.status(500).send('Error Code 500: Something internal broke!');
            } else {
                res.json(result);
            }
        });
    });
};
