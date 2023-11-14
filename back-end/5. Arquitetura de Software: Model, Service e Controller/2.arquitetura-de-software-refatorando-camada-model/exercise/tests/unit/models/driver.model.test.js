const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { driverModel } = require('../../../src/models');
const { 
  driversFromDB, 
  driverFromDB,
  driverIdFromDB,
  driverIdFromModel,
} = require('../mocks/driver.mock');

describe('Realizando testes - DRIVER MODEL', function () {
  it('Listar todas as pessoas motoristas que estão cadastradas', async function () {
    sinon.stub(connection, 'execute').resolves([driversFromDB]);

    const drivers = await driverModel.findAll();

    expect(drivers).to.be.an('array');
    expect(drivers).to.have.lengthOf(5);
    expect(drivers).to.be.deep.equal(driversFromDB);
  });

  it('Encontrar uma pessoa motorista por meio do id', async function () {
    sinon.stub(connection, 'execute').resolves([[driverFromDB]]);
    const inputId = 4;
    const drivers = await driverModel.findById(inputId);
    expect(drivers).to.be.an('object');
    expect(drivers).to.be.deep.equal(driverFromDB);
  });

  it('Cadastrar uma pessoa motorista', async function () {
    sinon.stub(connection, 'execute').resolves([driverIdFromDB]);
    const inputData = { name: 'Samara Granjeiro' };
    const drivers = await driverModel.insert(inputData);
    expect(drivers).to.be.an('number');
    expect(drivers).to.be.deep.equal(driverIdFromModel);
  });

  afterEach(function () {
    sinon.restore();
  });
});