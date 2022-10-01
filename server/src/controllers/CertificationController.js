import Certification from "../models/certification.js";

export default {
  async index(request, response) {
    try {
    const certifications = await Certification.findAll();
    return response.json(certifications);
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  },
  async create(request, response) {
    const {user_id_pk: userUserIdPk, hosp_id_pk: hospitalHospIdPk, cert_date, cert_tipo_sanguineo} = request.body;
    try{
    const certification = await Certification.create({userUserIdPk, hospitalHospIdPk, cert_date, cert_tipo_sanguineo});
    return response.json(certification);
    } catch (error) {
      return response.status(400).json({error: error.message});
    }
  },
  async certificationByUser(request, response) {
    const {user_id_pk: userUserIdPk} = request.params;
    try {
    const certifications = await Certification.findAll({
      where: {
        userUserIdPk,
      }
    });
    return response.json(certifications);
    } catch (error) {
      return response.status(400).json({error: "User not found"});
    }
  }
};