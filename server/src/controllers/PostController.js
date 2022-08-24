import Post from "../models/post.js";

export default {
    async index(request, response) {
        const posts = await Post.findAll();
        return response.json(posts);
    },
    async create(request, response) {
        const {post_text, post_type, post_points_to_share, user_id_fk, hospital_id_fk} = request.body;
        const post = await Post.create({post_text, post_type, post_points_to_share, user_id_fk, hospital_id_fk});
        return response.json(post);
    },
    async postByUser(request, response) {
        const {user_id_fk} = request.params;
        const posts = await Post.findAll({
            where: {
                user_id_fk
            }
        });
        return response.json(posts);
    },
    async postByHospital(request, response) {
        const {hospital_id_fk} = request.params;
        const posts = await Post.findAll({
            where: {
                hospital_id_fk
            }
        });
        return response.json(posts);
    }
}
