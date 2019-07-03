const app = require('../server');
const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const heroModel = require('../api/heroes/hero.dao');


// const sinonChai = require('sinon-chai');
// const {mockReq, mockRes} = require('sinon-express-mock');
// const HeroController = require('../api/heroes/hero.controller');
//add plugin
chai.use(chaiHttp);

// chai.use(sinonChai);
const expect = chai.expect;

function clearHeroCollection () {
    mongoose.connection.once('open',async () => {
        try{
            let result = await mongoose.connection.dropCollection('Heroes');
            console.log(result);
        }
        catch(err){
            console.log(err);
        }
    })
}





describe('Integration test of Heroes resources', () => {
    
    before(async () => {
      let result = await heroModel.findOne({})
      if(result != null){
          clearHeroCollection();
      }
    })
    //mock
    const mockJSON = {name: 'Foo', description: "lorem Ipsum!"};
    
    it('Should create resource with success', done => {
        
        chai.request(app)
            .post('/api/heroes')
            .send(body)
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            })

    });
    
    // it('Should read resource from db', done => {
        
    //     chai.request(app)
    //         .get('/api/heroes/Foo')
    //         .end((err, res) => {
    //             expect(err).to.be.null;
    //             expect(res).to.(String(mockJSON))
    //             done();
    //         })
    // })
})