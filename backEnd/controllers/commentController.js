import commentModel from "../models/comment.js";

export const getCommentsOfOnePost = async (req, res) => {
  const { id } = req.params;
  try {
    const comments = await commentModel.find({ post_id: id });
    res.status(200).json({ message: "Comments fetched", data: comments });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
export const deleteOneComment = async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await commentModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Comment deleted", data: comment });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
export const createOneComment = async (req, res) => {
  const body = req.body;
  try {
    const newComment = await commentModel.create({
      ...body,
    });
    res.status(200).json({
      message: "Comment Created",
      data: newComment,
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};
export const getAllComments = async (req, res) => {
  const id = req.query.id;
  try {
    const comments = await commentModel.find(id ? { profile_id: id } : {});
    res.status(200).json({ message: "Comments fetched", data: comments });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
