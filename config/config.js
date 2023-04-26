require('dotenv').config();
//환경변수 사용시 config.json => config.js 변경 후 사용가능
const development = {
  username: DB_DEVELOP_ID,
  password: process.env.DB_DEVELOP_PW,
  database: "week3_project1",
  host: DB_DEVELOP_HOST,
  dialect: "mysql"
};
const test = {
  username: DB_DEVELOP_ID,
  password: null,
  database: "database_test",
  host: "127.0.0.1",
  dialect: "mysql"
};
const production = {
  username: DB_DEVELOP_ID,
  password: null,
  database: "database_production",
  host: "127.0.0.1",
  dialect: "mysql"
};

module.exports = { development, test, production };