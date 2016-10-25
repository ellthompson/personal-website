import request from 'superagent';

export default function getHomepage(callback) {
    request
        .get('/api/homepage')
        .set('Accept', 'application/json')
        .end((err, res) => {
            if (err) {
                console.log(err);
            } else {
                callback(JSON.parse(res.text));
            }
        });
};
