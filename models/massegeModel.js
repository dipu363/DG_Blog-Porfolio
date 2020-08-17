module.exports = (sequelize, DataTypes) => {
    const massege = sequelize.define("Masseges", {
    
      name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    massegebody:{
        type:DataTypes.STRING,
        default:''
    }
      
    });
    return massege;
  };