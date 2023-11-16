const {PetModel, petSchema} = require('./pet.model');
const {userModel, userSchema} = require('./user.model');

function setUpModels(sequelize){
    PetModel.init(petSchema, PetModel.config(sequelize));
    userModel.init(userSchema, userModel.config(sequelize));
}

module.exports = setUpModels;
