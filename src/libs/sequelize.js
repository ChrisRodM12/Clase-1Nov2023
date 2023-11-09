const {Sequelize} = require('sequelize');

const sequelize = new Sequelize ('pets','postgres','012345',{
    host: 'localhost',
    dialect: 'postgres',
    logging: true
});

module.exports = sequelize;