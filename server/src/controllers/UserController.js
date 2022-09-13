import User from "../models/user.js";
import bcrypt from "bcrypt";

export default {
    async index(request, response){
        const users = await User.findAll();
        return response.json(users);
    },
  async create(request, response) {
    try {
      const {
        user_name,
        user_email,
        user_password,
        user_rua,
        user_cep,
        user_cidade,
        user_num_predial,
        user_unidade_federal,
        user_tipo_sanguineo,
        user_profile_pic,
        user_nascimento,
        user_points,
      } = request.body;
      const encryptedPassword = await bcrypt.hash(user_password, 10);
      const user = await User.create({
        user_name,
        user_email,
        user_password: encryptedPassword,
        user_rua,
        user_cep,
        user_cidade,
        user_num_predial,
        user_unidade_federal,
        user_tipo_sanguineo,
        user_profile_pic,
        user_nascimento,
        user_points,
      });
      return response.json(user);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },
  async userById(request, response) {
    const { user_id_pk } = request.params;
    const user = await User.findOne({
      where: {
        user_id_pk,
      },
    });
    return response.json(user);
  },
  async login(request, response) {
    const { user_email, user_password } = request.body;
    const user = await User.findOne({
      where: {
        user_email,
      },
    });
    if (!user) {
      return response.status(404).json({ error: "User not found" });
    }
    if (!(await bcrypt.compare(user_password, user.user_password))) {
      return response.status(401).json({ error: "Invalid password" });
    }
    return response.status(200).json({message: "User logged in successfully", user});
  }
};
