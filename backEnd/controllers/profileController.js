import profileModel from "./../models/profile.js";

export const getOneProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const profile = await profileModel.findById(id);
    res.status(200).json({ message: "Profile fetched", data: profile });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
export const deleteOneProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const profile = await profileModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Profile deleted", data: profile });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
export const updateOneProfile = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const profile = await profileModel.findByIdAndUpdate(
      id,
      { ...body },
      { runValidators: true }
    );
    res.status(200).json({ message: "Profile updated", data: profile });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
export const createOneProfile = async (req, res) => {
  const { email, username, password, nickname } = req.body;
  try {
    const newProfile = await profileModel.create({
      email: email,
      username: username,
      password: password,
      nickname: nickname ?? "",
    });
    res.status(200).json({
      message: "Profile Created",
      data: newProfile,
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};
export const getAllProfiles = async (req, res) => {
  try {
    const profile = await profileModel.find({})
    res.status(200).json({ message: "Profiles fetched", data: profile });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
