import { DataTypes } from "sequelize";
import database from "../database/connection.js";

const Hospital = database.define("hospital", {
  hosp_id_pk: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  hosp_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hosp_email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  hosp_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hosp_rua: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hosp_cep: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hosp_cidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hosp_num_predial: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  hosp_unidade_federal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hosp_pic: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Hospital;
