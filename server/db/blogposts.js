var _ = require('lodash');

module.exports = function(mongoose, callback) {
    mongoose.connection.db.collection('posts', function (err, collection) {
        collection.find({}).toArray(function(err, docs) {
            if (err) {
                console.log(err);
            } else {
                // format every blog post so that only the necessary info is returned
                var blogposts = _.reduce(
                    docs,
                    (result, value) => {
                        result.push(formatBlogpost(value));
                        return result;
                    },
                    []
                );
                callback(blogposts);
            }
        });
    });
};

function formatBlogpost(blogpost) {
    return {
        id: blogpost._id,
        title: blogpost.title,
        slug: blogpost.slug,
        image: blogpost.image.url,
        brief_content: blogpost.content.brief,
        date: blogpost.date
    };
}
