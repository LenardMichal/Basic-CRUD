const app = require('../server');
const chai = require('chai');
const chaiHttp = require('chai-http');

//Alias
const expect = chai.expect;

chai.use(chaiHttp);

describe('Initial test', () => {
    it('Test that basic request returns OK data', done => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            })
    })

    it('test that error routes are Handled', done => {
        chai.request(app)
            .get('/dfasdasagarsdfsdfased')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(404);
                done();
            })
    })
})