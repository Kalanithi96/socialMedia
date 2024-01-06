import likeModel from "../models/like.js";

export const getLikesOfOnePost = async (req, res) => {
  const { id } = req.params;
  try {
    const likes = await likeModel.find({ post_id: id });
    res.status(200).json({ message: "Likes fetched", data: likes });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
export const deleteOneLike = async (req, res) => {
  const { id } = req.params;
  try {
    const like = await likeModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Like deleted", data: like });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
export const createOneLike = async (req, res) => {
  const body = req.body;
  try {
    const newLike = await likeModel.create({
      ...body,
    });
    res.status(200).json({
      message: "Like Created",
      data: newLike,
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};
export const getAllLikes = async (req, res) => {
  const id = req.query.id;
  try {
    const likes = await likeModel.find(id ? { profile_id: id } : {});
    res.status(200).json({ message: "Likes fetched", data: likes });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
