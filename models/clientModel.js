module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define("Client", {
    
      name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },

    file:{
        type:DataTypes.STRING,
        default:''
    }
      
    });
    return Client;
  };