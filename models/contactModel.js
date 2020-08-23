module.exports = (sequelize, DataTypes) => {
    const ContactInfo = sequelize.define("ContactInfo", {
    
    companyName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    countryName: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },    
    area: {
        type: DataTypes.STRING,
        allowNull: true
    }, 
    roadNo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    houseNO: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    }, 
  
    phoneno: {
        type: DataTypes.STRING,
        allowNull: true
    },  
    mobile1: {
        type: DataTypes.STRING,
        allowNull: true
    }, 
    mobile2: {
        type: DataTypes.STRING,
        allowNull: true
    },  
    faxno: {
        type: DataTypes.STRING,
        allowNull: true
    }, 
   
    weburl: {
        type: DataTypes.STRING,
        allowNull: true
    },
    facebook: {
        type: DataTypes.STRING,
        allowNull: true
    },
    twiter: {
        type: DataTypes.STRING,
        allowNull: true
    },
    
    instagram: {
        type: DataTypes.STRING,
        allowNull: true
    },
    linkedIn: {
        type: DataTypes.STRING,
        allowNull: true
    },
    
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    file:{
        type:DataTypes.STRING,
        default:''
    }
      
    });
    return ContactInfo;
  };