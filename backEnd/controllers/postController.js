import postModel from "../models/post.js";

export const getOnePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await postModel.findById(id);
    res.status(200).json({ message: "Post fetched", data: post });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
export const deleteOnePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await postModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Post deleted", data: post });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
export const updateOnePost = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const post = await postModel.findByIdAndUpdate(
      id,
      { ...body },
      { runValidators: true }
    );
    res.status(200).json({ message: "Post updated", data: post });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
export const createOnePost = async (req, res) => {
  const body = req.body;
  try {
    const newPost = await postModel.create({
      ...body,
    });
    res.status(200).json({
      message: "Post Created",
      data: newPost,
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};
export const getAllPosts = async (req, res) => {
  try {
    const post = await postModel.find({})
    res.status(200).json({ message: "Posts fetched", data: post });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
