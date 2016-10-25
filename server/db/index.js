var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/personal-website');

var homepageQuery = require('./homepage.js');
var blogpostsQuery = require('./blogposts.js');
var blogpostQuery = require('./blogpost.js');

module.exports = {
    homepage: function(callback) {
        homepageQuery(mongoose, callback);
    },
    blogposts: function(callback) {
        blogpostsQuery(mongoose, callback);
    },
    blogpost: function(slug, callback) {
        blogpostQuery(slug, mongoose, callback);
    }
};
