import express from "express";
import {
  getLikesOfOnePost,
  toggleOneLike,
  getAllLikes,
} from "../controllers/likeController.js";

const router = express.Router();

router
  .route("/")
  .get(getAllLikes)
  .post(toggleOneLike);

router
  .route("/:id")
  .get(getLikesOfOnePost)

export default router;
