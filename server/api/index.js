var homepage = require('./homepage.js');
var blogposts = require('./blogposts.js');
var blogpost = require('./blogpost.js');

module.exports = function(app, db) {
    homepage(app, db);
    blogposts(app, db);
    blogpost(app, db);
};

