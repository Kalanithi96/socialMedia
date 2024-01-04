import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: {
    type: String,
  },
  caption: {
    type: String,
    required: true,
  },
  profile_id:{
    type: mongoose.Types.ObjectId,
    required: true
  }
});

export default mongoose.model("post", postSchema);