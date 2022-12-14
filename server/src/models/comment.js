import { DataTypes } from "sequelize";
import database from "../database/connection.js";
import User from "./user.js";
import Post from "./post.js";

const Comment = database.define("comment", {
    com_id_pk: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    comment_text: {
        type: DataTypes.TEXT,
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

Comment.belongsTo(User, { foreignKey: "user_id_fk", as: "user" });
Comment.belongsTo(Post, { foreignKey: "post_id_fk", as: "post" });

export default Comment;