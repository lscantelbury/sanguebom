import { Sequelize } from "sequelize";

const connection = new Sequelize(
  "sanguebom",
  "postgres",
  `${process.env.POSTGRES_PASSWORD}`,
  {
    host: "localhost",
    dialect: "postgres",
    port: "3301",
  }
);

function handleTestConnection() {
  connection
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((error) => {
      console.error("Unable to connect to the database:", error);
    })
    .finally(() => {
      connection.close();
    });
}

// handleTestConnection();
connection.sync();

export default connection;
