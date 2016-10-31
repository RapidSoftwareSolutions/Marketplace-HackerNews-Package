const Q        = require('q');
const request  = require('request');

module.exports = (route, req) => {
    const defered = Q.defer();

    let uri = 'https://hacker-news.firebaseio.com/v0/' + route.name;

    if(route.params) {
        let param = Object.keys(route.params)[0];

        if(!req.body.args[param])
            throw new Error(param + ' is required.');

        uri += '/' + req.body.args[param];
    }

    uri += '.json';

    request(uri, (err, response, reslut) => {
        if(!err && response.statusCode == 200) 
            defered.resolve(JSON.parse(reslut));
        else 
            defered.reject(err || JSON.parse(reslut));
    });

    return defered.promise;
}