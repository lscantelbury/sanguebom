import { DataTypes } from "sequelize";
import database from "../database/connection.js";

const User = database.define(
  "user",
  {
    user_id_pk: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_rua: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_cep: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_cidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_num_predial: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_unidade_federal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_tipo_sanguineo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_profile_pic: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_nascimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    user_points: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
    tableName: "user",
  }
);

export default User;
