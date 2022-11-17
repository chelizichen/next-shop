import * as mysql from "mysql";
import { createClient } from "redis";
async function getConn() {
  const config = {
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "ado", //所用数据库
    port: 3306,
  };
  const conn = await mysql.createPool({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    port: config.port,
  });
  return conn;
}

async function getRedis() {
  const redis = createClient();
  return redis;
}

export { getConn, getRedis };
