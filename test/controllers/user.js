const app = require('../../app');

describe('User controller', () => {
  beforeEach(async () => {
    await models.sequelize.sync();
  });

  it ('Should register a new user', () => {
    chai.request(app)
      .post('/register')
      .send({ email: 'test@test.com', password: 'password' })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body.message).to.be.equal('User created');
      });
  });

  it ('Should login a user', async () => {
    chai.request(app)
      .post('/login')
      .send({email: 'test@test.com', password: 'password'})
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
      });
  });
});