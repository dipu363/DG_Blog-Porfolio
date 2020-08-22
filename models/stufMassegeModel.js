module.exports = (sequelize, DataTypes) => {
    const Stufmassege = sequelize.define("StufMassege", {
    
      name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    designation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    massege: {
        type: DataTypes.STRING,
        allowNull: false
    },

    file:{
        type:DataTypes.STRING,
        default:''
    }
      
    });
    return Stufmassege;
  };