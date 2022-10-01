import Post from "../models/post.js";

export default {
  async index(request, response) {
    const posts = await Post.findAll();
    return response.json(posts);
  },
  async create(request, response) {
    const {
      post_text,
      post_type,
      post_points_to_share,
      user_id_fk,
      hospital_id_fk,
    } = request.body;
    try {
      const post = await Post.create({
        post_text,
        post_type,
        post_points_to_share,
        user_id_fk,
        hospital_id_fk,
      });
      return response.json(post);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
  async postByUser(request, response) {
    const { user_id_fk } = request.params;
    try {
      const posts = await Post.findAll({
        where: {
          user_id_fk,
        },
      });
      return response.json(posts);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
  async postByHospital(request, response) {
    const { hospital_id_fk } = request.params;
    const posts = await Post.findAll({
      where: {
        hospital_id_fk,
      },
    });
    return response.json(posts);
  },
};

// create a post with json format
// {
//     "post_text": "adfkjadhf muito bom",
//     "post_type": "askdah",
//     "post_points_to_share": 32,
//     "user_id_fk": 3,

// }
