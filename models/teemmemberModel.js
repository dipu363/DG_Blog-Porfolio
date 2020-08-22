module.exports = (sequelize, DataTypes) => {
  const TeemMember = sequelize.define("TeemMembers", {
  
    name: {
      type: DataTypes.STRING,
      allowNull: false
  },
  designation: {
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
  return TeemMember;
};