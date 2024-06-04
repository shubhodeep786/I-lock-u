module.exports = (sequelize, DataTypes) => {
  const Resources = sequelize.define('Resources', {
    ResourceID: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    DIDID: {
      type: DataTypes.STRING,
      references: {
        model: 'DIDs',
        key: 'ID',
      },
      allowNull: false,
    },
    Payload: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });

  return Resources;
};
