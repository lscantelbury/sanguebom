import { DataTypes } from "sequelize";
import database from "../database/connection.js";
import Hospital from "./hospital.js";
import User from "./user.js";

const Certification = database.define("certification", {
  cert_id_pk: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cert_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  cert_tipo_sanguineo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Certification);
Hospital.hasMany(Certification);

export default Certification;
