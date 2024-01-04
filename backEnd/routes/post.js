import express from "express";
import {
  getOnePost,
  deleteOnePost,
  updateOnePost,
  createOnePost,
  getAllPosts,
} from "../controllers/postController.js";

const router = express.Router();

router
  .route("/")
  .get(getAllPosts)
  .post(createOnePost);

router
  .route("/:id")
  .get(getOnePost)
  .delete(deleteOnePost)
  .put(updateOnePost);

export default router;
