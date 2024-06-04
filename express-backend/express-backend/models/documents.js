module.exports = (sequelize, DataTypes) => {
    const Documents = sequelize.define('Documents', {
      DocumentID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      OwnerID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'UserID',
        },
        allowNull: false,
      },
      Content: {
        type: DataTypes.BLOB,
        allowNull: false,
      },
      Created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      Updated: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    }, {
      timestamps: false,
    });
  
    return Documents;
  };
  