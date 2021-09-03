const { config } = require('./database/databaseConfig');
module.exports = {
  development: {
    ...config,
    migrations: {
      directory: './migrations'
    }
  }
};