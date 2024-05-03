import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  clientpost: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

export const Client = mongoose.model("Client", clientSchema);

const postSchema = new mongoose.Schema({
  postdisc: {
    type: String,
    required: true,
  },
  postimgurl: {
    type: String,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
  comments: [
    {
      type: String,
    },
  ],
});

export const Post = mongoose.model("Post", postSchema);
