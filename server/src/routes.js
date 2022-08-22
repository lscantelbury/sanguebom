import express from "express";
import CertificationController from "./controllers/CertificationController.js";
import HospitalController from "./controllers/HospitalController.js";
import UserController from "./controllers/UserController.js";

const router = express.Router();

router.post("/create-user", UserController.create);
router.get("/users", UserController.index);
router.get("/hospitals", CertificationController.index);
router.post("/create-hospital", CertificationController.create);
router.get("/certifications", HospitalController.index);
router.post("/create-hospital", HospitalController.create);

export default router;