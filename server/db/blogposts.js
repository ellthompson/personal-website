var _ = require('lodash');

module.exports = function(mongoose, callback) {
    mongoose.connection.db.collection('posts', function (err, collection) {
        collection.find({}).toArray(function(err, docs) {
            if (err) {
                console.log(err);
                callback(500);
            } else {
                try {
                    var blogposts = _.reduce(
                        docs,
                        (result, value) => {
                            result.push(formatBlogpost(value));
                            return result;
                        },
                        []
                    );
                    callback(blogposts);
                } catch (e){
                    console.log(e);
                    callback(500);
                }
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
