module.exports = function(mongoose, callback) {
    mongoose.connection.db.collection('homepages', function (err, collection) {
        collection.find({}).toArray(function(err, docs) {
            if (err) {
                console.log(err);
                callback(500);
            } else {
                try {
                    var homepageDocument = docs[0];
                    var homepage = mapHomepageDocument(homepageDocument);
                    callback(homepage);
                } catch (e){
                    console.log(e);
                    callback(500);
                }
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
