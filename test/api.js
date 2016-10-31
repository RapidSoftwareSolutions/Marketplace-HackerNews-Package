const assert = require('chai').assert;
const request = require('supertest-as-promised');
const app = require('../index');

const itemId = 1,
    username = 'jd';

describe('HackerNews package', function() {
    it('/getItem', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getItem')
        .send({args: { 
            itemId
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/getUser', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getUser')
        .send({args: { 
            username
        }})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/getTopStories', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getTopStories')
        .send({args: {}})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/getNewStories', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getNewStories')
        .send({args: {}})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/getBestStories', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getBestStories')
        .send({args: {}})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/getAskStories', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getAskStories')
        .send({args: {}})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/getShowStories', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getShowStories')
        .send({args: {}})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/getJobStories', function(done) {
        this.timeout(5000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getJobStories')
        .send({args: {}})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });

    it('/getUpdates', function(done) {
        this.timeout(5000);
        
        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getUpdates')
        .send({args: {}})
        .expect(200)
        .then((data) => {
            if(data.body.callback == 'success') done();
            else done(data.body);
        });
    });
})