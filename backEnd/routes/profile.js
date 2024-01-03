import express from "express";
import {
  getOneProfile,
  deleteOneProfile,
  updateOneProfile,
  createOneProfile,
  getAllProfiles,
} from "./../controllers/profileController.js";

const router = express.Router();

router
  .route("/")
  .get(getAllProfiles)
  .post(createOneProfile);

router
  .route("/:id")
  .get(getOneProfile)
  .delete(deleteOneProfile)
  .patch(updateOneProfile);

export default router;
