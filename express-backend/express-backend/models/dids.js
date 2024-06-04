module.exports = (sequelize, DataTypes) => {
  const DIDs = sequelize.define('DIDs', {
    ID: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Controller: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Created: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Updated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    DIDDocument: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });

  return DIDs;
};
