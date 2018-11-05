const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../server/server.js')();
chai.use(chaiHttp);

describe('Server', () => {

  describe('GET /', () => {
    it('it should send static assets', (done) => {
      chai.request('http://localhost:3000')
        .get('/')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(404);
          done();
        })

    });
  });
  
  describe('GET /details', () => {
    it('it should respond to GET /details with valid json', (done) => {
      chai.request('http://localhost:3000')
        .get('/details')
        .query({name: 'KOHNE, STEVEN CHASE DR.'})
        .end(function(err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done()
        });
    })
  });
});
