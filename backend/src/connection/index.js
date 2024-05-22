const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("MVC", "postgres", "m601748M", {
  host: "localhost",
  dialect: "postgres",
});

(async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = { sequelize };
