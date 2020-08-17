module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("Users", {
    
      firstName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    
    lastName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    userstatus:{
        type:DataTypes.STRING,
        allowNull:true
    }
      
    });
    return User;
  };