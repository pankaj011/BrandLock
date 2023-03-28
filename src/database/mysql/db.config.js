'use strict';

let CONFIG = require('../../config/dbConfig')
const {Sequelize, DataTypes} = require('sequelize');


const sequelize = new Sequelize(CONFIG.SQL_CONFIG.database, CONFIG.SQL_CONFIG.username, CONFIG.SQL_CONFIG.password, {
  host: CONFIG.SQL_CONFIG.host,
  dialect: CONFIG.SQL_CONFIG.dialect,
  operatorsAliases: 0,
  pool: {
    max: CONFIG.SQL_CONFIG.pool.max,
    min: CONFIG.SQL_CONFIG.pool.min,
    acquire: CONFIG.SQL_CONFIG.pool.acquire,
    idle: CONFIG.SQL_CONFIG.pool.idle
  },
  logging: false
});
    
sequelize.authenticate()
.then(() => {
  console.log("database is connected successfully..")
})
.catch(console.error);
  
// (async () => {
//     await sequelize.sync({ force: false });
// })()

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Initialize models
db.Player = require('./models/players.models')(sequelize, DataTypes);
db.Skill = require('./models/skills.models')(sequelize, DataTypes);

// Define associations
db.Skill.belongsTo(db.Player, { foreignKey: 'playerId'});
db.Player.hasMany(db.Skill)

module.exports = db;