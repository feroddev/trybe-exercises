const { addCarSchema, updateCarSchema } = require('./schemas');
const { carModel } = require('../../models');

const validateNewCar = ({ model, licensePlate, year, color, driverId }) => {
  const { error } = addCarSchema
    .validate({ model, licensePlate, year, color, driverId });
  if (error) return { status: 'INVALID_VALUE', message: error.message };
};

const validateUpdateCar = ({ model, licensePlate, year, color, driverId }) => {
  const { error } = updateCarSchema
    .validate({ model, color, licensePlate, year, driverId });
  if (error) return { status: 'INVALID_VALUE', message: error.message };
};

const isValidLicensePlateFormat = (licensePlate) => {
  const regex = /[A-Z]{3}[0-9][A-Z0-9][0-9]{2}/;
  return regex.test(licensePlate);
};

const isLicensePlateAlreadyRegistered = async (licensePlate) => {
  const car = await carModel.findByPlate(licensePlate);
  return car || false;
};

const validateYearCar = (year) => {
  const data = new Date();
  const yearCurrent = data.getFullYear();
  const yearDiff = yearCurrent - year;
  return yearDiff > 10;
};

module.exports = {
  validateNewCar,
  validateUpdateCar,
  isValidLicensePlateFormat,
  isLicensePlateAlreadyRegistered,
  validateYearCar,
};