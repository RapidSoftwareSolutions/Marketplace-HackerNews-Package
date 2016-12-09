'use strict';
global.PACKAGE_NAME = "HackerNews";

global.ValidationError = function(fields) {
    this.status_code = 'REQUIRED_FIELDS',
    this.status_msg  = 'Please, check and fill in required fields';
    this.fields = fields || [];
}

ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;

const express       = require('express');
const bodyParser    = require('body-parser');
const request       = require('./request.js');
const lib           = require('./lib/functions.js');
const _             = lib.callback;

const PORT          = process.env.PORT || 8080;
const app           = express();

const routeHash     = {
    getItem:        {name: 'item', params: {itemId:   'id'}},
    getUser:        {name: 'user', params: {username: 'id'}},
    getTopStories:  {name: 'topstories'},
    getNewStories:  {name: 'newstories'},
    getBestStories: {name: 'beststories'},
    getAskStories:  {name: 'askstories'},
    getShowStories: {name: 'showstories'},
    getJobStories:  {name: 'jobstories'},
    getUpdates:     {name: 'updates'}
}

app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.all(`/api/${PACKAGE_NAME}`, require('./metadata.js').do);

app.post(`/api/${PACKAGE_NAME}/:route`, _(function* (req, res) {
    let r  = {
        callback     : "",
        contextWrites: {}
    };

    let to = req.body.args.to || 'to';
    let response;

    if(!routeHash[req.params.route]) {
        r.callback          = 'error';
        r.contextWrites[to] = '404';
        res.status(200).send(r);
        return;
    }

    try {
        response = yield request(routeHash[req.params.route], req);

        if(response == null) 
            throw new Error('Item not found');

        r.callback          = 'success';
        r.contextWrites[to] = response
    } catch(e) {
        r.callback          = 'error';
        r.contextWrites[to] = {
            status_code: 'API_ERROR',
            status_msg: e.message || e
        }
    }

    res.status(200).send(r);
}));

app.listen(PORT);
module.exports = app;