module.exports = (sequelize, DataTypes) => {
  const DocumentTransactions = sequelize.define('DocumentTransactions', {
    TransactionID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    DocumentID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Documents',
        key: 'DocumentID',
      },
      allowNull: false,
    },
    TransactionData: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });

  return DocumentTransactions;
};
