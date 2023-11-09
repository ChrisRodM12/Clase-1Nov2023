const {Model, DataTypes} = require('sequelize');

const PET_TABLE = 'pets';

const petSchema = {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    breed:{
        type: DataTypes.STRING,
        allowNull: false
    },
    type:{
        type: DataTypes.STRING,
        allowNull: false
    }
};

class PetModel extends Model {

    static associate(models){

    }

    static config (sequelize){
        return{
            sequelize,
            modelName: 'PetMdodel',
            tableName: PET_TABLE,
            timestamps: false
        }
    }
}