import * as mysql from "mysql";

// import { createClient } from "redis";
async function getConn() {
  const config = {
    host: "localhost",
    user: "root",
    password: "leemulus21",
    database: "zrq_shop", //所用数据库
    port: 3306,
  };
  return function (){
    return mysql.createConnection({
      host: config.host,
      user: config.user,
      password: config.password,
      database: config.database,
      port: config.port,
    })
  }
}
const conn = getConn()

// async function getRedis() {
//   const redis = createClient();
//   return redis;
// }

// export { getConn, getRedis };
export { conn };
