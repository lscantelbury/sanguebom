import express from "express";
import CertificationController from "./controllers/CertificationController.js";
import HospitalController from "./controllers/HospitalController.js";
import UserController from "./controllers/UserController.js";
import PostController from "./controllers/PostController.js";
import CommentController from "./controllers/CommentController.js";
import LikeController from "./controllers/LikeController.js";

const router = express.Router();

router.get("/users", UserController.index);
router.post("/create-user", UserController.create);
router.get("/users/:user_id_pk", UserController.userById);
router.get("/users/:user_id_pk/certifications", CertificationController.certificationByUser);
router.get("/users/:user_id_pk/posts", PostController.postByUser);
router.get("/users/:user_id_pk/likes", LikeController.likeByUser);
router.get("/users/:user_id_pk/comments/:post_id_fk", CommentController.commentByUserInsidePost);
router.get("/hospitals", HospitalController.index);
router.post("/create-certification", CertificationController.create);
router.get("/certifications", CertificationController.index);
router.get("/certifications/:user_id_pk", CertificationController.certificationByUser);
router.post("/create-hospital", HospitalController.create);

export default router;