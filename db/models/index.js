const {PetModel, petSchema} = require('./pet.model');

function setUpModels(sequelize){
    PetModel.init(petSchema, PetModel.config(sequelize));
}

module.exports = setUpModels;