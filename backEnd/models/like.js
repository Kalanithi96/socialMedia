import mongoose from "mongoose";

const likeSchema = mongoose.Schema({
  post_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  profile_id: {
    type: mongoose.Types.ObjectId,
    required: true,
  }
});

export default mongoose.model("like", likeSchema);
