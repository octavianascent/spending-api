exports.databaseConfig = {
  development: {
    username: "",
    password: "",
    database: "",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: "",
    password: "",
    database: "",
    host: "localhost",
    dialect: "mysql"
  },
  production: {
    username: "",
    password: null,
    database: "",
    host: "127.0.0.1",
    dialect: "mysql"
  }
};

exports.tokenSecret = 'put your secret here';