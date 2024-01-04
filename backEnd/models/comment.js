import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  post_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  profile_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  text: {
    type: String,
    required: true,
  }
});

export default mongoose.model("comment", commentSchema);
