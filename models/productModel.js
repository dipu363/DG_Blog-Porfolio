module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define("Products", {
    
      proTitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
  
    file1:{
        type:DataTypes.STRING,
        default:''
    },
    file2:{
        type:DataTypes.STRING,
        default:''
    },
    file3:{
        type:DataTypes.STRING,
        default:''
    },
  
      
    });

    return Products;
  };