process.env.NODE_ENV = 'test';

const chai = require('chai');
const models = require('../models');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

global.chai = chai;
global.expect = chai.expect;
global.models = models;