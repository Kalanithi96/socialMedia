import express from "express";
import {
  getCommentsOfOnePost,
  deleteOneComment,
  createOneComment,
  getAllComments,
} from "../controllers/commentController.js";

const router = express.Router();

router
  .route("/")
  .get(getAllComments)
  .post(createOneComment);

router
  .route("/:id")
  .get(getCommentsOfOnePost)
  .delete(deleteOneComment);

export default router;
