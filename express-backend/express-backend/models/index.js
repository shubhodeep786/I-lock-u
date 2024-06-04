const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
});

const Users = require('./users')(sequelize, DataTypes);
const DIDs = require('./dids')(sequelize, DataTypes);
const Resources = require('./resources')(sequelize, DataTypes);
const Documents = require('./documents')(sequelize, DataTypes);
const DocumentTransactions = require('./documentTransactions')(sequelize, DataTypes);

Users.hasMany(Documents, { foreignKey: 'OwnerID' });
Documents.belongsTo(Users, { foreignKey: 'OwnerID' });

DIDs.hasMany(Resources, { foreignKey: 'DIDID' });
Resources.belongsTo(DIDs, { foreignKey: 'DIDID' });

Documents.hasMany(DocumentTransactions, { foreignKey: 'DocumentID' });
DocumentTransactions.belongsTo(Documents, { foreignKey: 'DocumentID' });

module.exports = {
  sequelize,
  Users,
  DIDs,
  Resources,
  Documents,
  DocumentTransactions,
};
