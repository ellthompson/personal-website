import request from 'superagent';

export default function getBlogList(callback) {
    request
        .get('/api/blogposts')
        .set('Accept', 'application/json')
        .end((err, res) => {
            if (err) {
                console.log(err);
            } else {
                callback(JSON.parse(res.text));
            }
        });
};
