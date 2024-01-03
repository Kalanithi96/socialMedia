import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
  },
});

export default mongoose.model("profile", profileSchema);