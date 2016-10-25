module.exports = function(mongoose, callback) {
    mongoose.connection.db.collection('homepages', function (err, collection) {
        collection.find({}).toArray(function(err, docs) {
            if (err) {
                console.log(err);
            } else {
                var homepageDocument = docs[0];
                var homepage = mapHomepageDocument(homepageDocument);
                callback(homepage);
            }
        });
    });
};

function mapHomepageDocument(homepageDocument) {
    return {
        heading: homepageDocument.headingTitle,
        backgroundImage: homepageDocument.backgroundImage.url,
        content: homepageDocument.content
    };
}
