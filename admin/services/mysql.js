/***
 * Database
 */

const mysql = require("mysql");
const config = require("../config/config");

const query = async (sql, params) => {
  const connect = await mysql.createConnection(config.server_info);
  const [results] = await connect.execute(sql, params);

  return results
}

module.exports = { query }