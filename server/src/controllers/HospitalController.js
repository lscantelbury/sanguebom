import Hospital from "../models/hospital.js";
import bcrypt from "bcrypt";

export default {
  async index(request, response) {
    const hospitals = await Hospital.findAll();
    return response.json(hospitals);
  },
  async create(request, response) {
    try {
      const {
        hosp_name,
        hosp_email,
        hosp_password,
        hosp_rua,
        hosp_cep,
        hosp_cidade,
        hosp_num_predial,
        hosp_unidade_federal,
        hosp_pic,
      } = request.body;
      const encryptedPassword = await bcrypt.hash(hosp_password, 10);
      const hospital = await Hospital.create({
        hosp_name,
        hosp_email,
        hosp_password: encryptedPassword,
        hosp_rua,
        hosp_cep,
        hosp_cidade,
        hosp_num_predial,
        hosp_unidade_federal,
        hosp_pic,
      });
      return response.json(hospital);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },
};
