import express from "express";
import {
  getLikesOfOnePost,
  deleteOneLike,
  createOneLike,
  getAllLikes,
} from "../controllers/likeController.js";

const router = express.Router();

router
  .route("/")
  .get(getAllLikes)
  .post(createOneLike);

router
  .route("/:id")
  .get(getLikesOfOnePost)
  .delete(deleteOneLike);

export default router;
