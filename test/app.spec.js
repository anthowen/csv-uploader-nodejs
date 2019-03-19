const request = require('supertest');

describe('express test', () => {
    console.log(process.env.NODE_ENV)
    var server = require('../bin/www');

    it('responds to /', (done) => {
        request(server)
            .get('/')
            .expect(200)
            .end(done);
    });

    it('responds to /show_all', (done) => {
        request(server)
            .get('/show_all')
            .expect(200, done);
    })

    it('responds to /load_csv', (done) => {
        request(server)
            .get('/load_csv')
            .expect(200, done);
    })

    it('responds to /load_csv', (done) => {
        request(server)
            .post('/load_csv')
            .set('Content-Type', 'multipart/form-data')
            .attach('userfile', './test/test.csv')
            .expect(200, done);
    })
});