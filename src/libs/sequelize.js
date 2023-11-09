const {Sequelize} = require('sequelize');
const setUpModels = require('../../db/models');

const sequelize = new Sequelize ('pets','postgres','012345',{
    host: 'localhost',
    dialect: 'postgres',
    logging: true
});

setUpModels(sequelize)

module.exports = sequelize;