const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "nadeem", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
