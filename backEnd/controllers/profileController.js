import profileModel from "./../models/profile.js";

export const getOneProfile = (req, res) => {
  console.log("getOneProfile");
};
export const deleteOneProfile = (req, res) => {
  console.log("deleteOneProfile");
};
export const updateOneProfile = (req, res) => {
  console.log("updateOneProfile");
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
    res
        .status(200)
        .json({ 
            message: "Profile Created", 
            data: newProfile 
        });
  } catch (err) {
    res
        .status(400)
        .json({
            error: err,
        });
  }
};
export const getAllProfiles = (req, res) => {
  console.log("getAllProfiles");
};
