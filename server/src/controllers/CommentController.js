import Comment from '../models/comment.js';

export default {
    async index(request, response) {
        const comments = await Comment.findAll();
        return response.json(comments);
    },
    async create(request, response) {
        const {comment_text, comment_type, comment_points_to_share, user_id_fk, post_id_fk} = request.body;
        const comment = await Comment.create({comment_text, comment_type, comment_points_to_share, user_id_fk, post_id_fk});
        return response.json(comment);
    },
    async commentByUserInsidePost(request, response) {
        const {user_id_fk, post_id_fk} = request.params;
        const comments = await Comment.findAll({
            where: {
                user_id_fk,
                post_id_fk
            }
        });
        return response.json(comments);
    },
}
