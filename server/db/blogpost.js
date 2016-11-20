module.exports = function(slug, mongoose, callback) {
    mongoose.connection.db.collection('posts', function (err, collection) {
        collection.find({ slug }).toArray(function(err, docs) {
            if (err) {
                console.log(err);
                callback(500);
            } else {
                try {
                    var blogpost = formatBlogpost(docs[0]);
                    callback(blogpost);
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
        title: blogpost.title,
        image: blogpost.image.url,
        date: blogpost.date,
        content: blogpost.content.extended
    };
};
