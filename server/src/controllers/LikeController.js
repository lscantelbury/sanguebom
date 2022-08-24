import Like from "../models/like.js";

export default {
    async index(request, response) {
        const likes = await Like.findAll();
        return response.json(likes);
    },
    async create(request, response) {
        const {like_id_pk, user_id_fk, post_id_fk} = request.body;
        const like = await Like.create({like_id_pk, user_id_fk, post_id_fk});
        return response.json(like);
    },
    async likeByUser(request, response) {
        const {user_id_fk} = request.params;
        const likes = await Like.findAll({
            where: {
                user_id_fk
            }
        });
        return response.json(likes);
    }
}
