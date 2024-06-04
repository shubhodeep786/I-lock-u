module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    UserID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    PhoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    LoginPIN: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    AadhaarNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    PANNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    UserImage: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
  }, {
    timestamps: false,
  });

  return Users;
};