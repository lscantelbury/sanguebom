import { Sequelize } from "sequelize";

const connection = new Sequelize(
  `${process.env.DATABASE_NAME}`,
  `${process.env.DATABASE_USER}`,
  `${process.env.POSTGRES_PASSWORD}`,
  {
    host: `${process.env.POSTGRES_HOST}`,
    dialect: "postgres",
    port: `${process.env.POSTGRES_PORT}`,
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
connection.sync({alter: true});

export default connection;
