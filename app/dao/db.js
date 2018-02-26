const sqlite3 = require('sqlite3').verbose();
const CONFIG = require('../config/config');
const db = new sqlite3.Database(CONFIG.db);

module.exports = {
  _query: (sql) => {
    return new Promise((resolve, reject) => {
      if (!sql) {
        return false;
      }
      db.all(sql, (err, res) => {
        if (err) {
          console.error(err);
          return reject(err);
        } else {
          return resolve(res);
        }
      })
    });
  },
  test: async (sql) => {
    const res = await this._query(sql);
    return res;
  }
}