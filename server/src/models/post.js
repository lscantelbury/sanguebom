import { DataTypes } from "sequelize";
import database from "../database/connection.js";
import User from "./user.js";
import Hospital from "./hospital.js";
import Comment from "./comment.js";

const Post = database.define("post", {
    post_id_pk: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    post_text: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    post_type: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    post_points_to_share: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    hospital_id_fk: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
});

Post.belongsTo(User, { foreignKey: "user_id_fk", as: "user" });
Post.belongsTo(Hospital, { foreignKey: "hospital_id_fk", as: "hospital" });
Post.hasMany(Comment)
export default Post;