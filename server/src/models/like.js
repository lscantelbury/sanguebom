import { DataTypes } from "sequelize";
import database from "../database/connection.js";
import User from "./user.js";
import Post from "./post.js";

const Like = database.define("like", {
    like_id_pk: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    user_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    post_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

Like.belongsTo(User, { foreignKey: "user_id_fk", as: "user" });
Like.belongsTo(Post, { foreignKey: "post_id_fk", as: "post" });

export default Like;