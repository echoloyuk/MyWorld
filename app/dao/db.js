const sqlite3 = require('sqlite3').verbose();
const CONFIG = require('../config/config');
const db = new sqlite3.Database(CONFIG.db);

const _sql = (type, sql) => {
  type = type === 'query' ? 'all' : 'run';
  return new Promise((resolve, reject) => {
    if (!sql) {
      return false;
    }
    db[type](sql, (err, res) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(res);
      }
    })
  })
}

module.exports = {
  test: async (sql) => {
    const res = await _sql('query', sql);
    return res;
  }
};