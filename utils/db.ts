import * as mysql from "mysql";

const config = {
  host: "localhost",
  user: "root",
  password: "123456",
  database: "zrq_shop", //所用数据库
  port: 3306,
};

const conn = mysql.createPool({
      host: config.host,
      user: config.user,
      password: config.password,
      database: config.database,
      port: config.port,
})
export { conn };
