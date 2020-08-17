module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("Posts", {
    
      title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

    file:{
        type:DataTypes.STRING,
        default:''
    }
      
    });
    return Post;
  };