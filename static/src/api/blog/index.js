import request from 'superagent';

export default function getBlog(slug, callback) {
    request
        .get(`/api/blogpost/${slug}`)
        .set('Accept', 'application/json')
        .end((err, res) => {
            if (err) {
                console.log(err);
            } else {
                callback(JSON.parse(res.text));
            }
        });
};
