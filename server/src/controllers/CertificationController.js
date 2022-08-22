import Certification from "../models/certification.js";

export default {
  async index(request, response) {
    const certifications = await Certification.findAll();
    return response.json(certifications);
  },
  async create(request, response) {
    const {cert_id_pk, user_id_pk, hosp_id_pk, cert_date, cert_tipo_sanguineo} = request.body;
    const certification = await Certification.create({cert_id_pk, user_id_pk, hosp_id_pk, cert_date, cert_tipo_sanguineo});
    return response.json(certification);
  },
};
