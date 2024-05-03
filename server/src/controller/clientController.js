import { ApiError, ApiResponse } from "../utils/ApiUtils.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Client, Post } from "../models/client.model.js";

const registerClient = asyncHandler(async (req, res) => {
  const username = req.body.username;
  console.log(req.body);
  if (!username) {
    throw new ApiError("400", "All fields are required");
  }
  const existedUser = await Client.findOne({ username });
  const options = {
    httpOnly: true,
    secure: true,
  };
  if (existedUser) {
    return res
      .status(201)
      .cookie("user", username, options)
      .json(new ApiResponse(200, existedUser, "exixting"));
  }

  const newClient = await Client({
    username,
  });

  await newClient.save();

  return res
    .status(201)
    .cookie("user", newClient.username, options)
    .json(new ApiResponse(200, newClient, "User registered Successfully"));
});

const createPost = asyncHandler(async (req, res) => {
  const username = "testingsuser";
  const { disc } = req.body;
  // const postimg = req.file?.path;

  try {
    if (!username) {
      return res.status(400).json(new ApiResponse(400, "Username is required"));
    }
    if (!disc) {
      return res
        .status(400)
        .json(new ApiResponse(400, "Post description is required"));
    }

    let imgurl;
    if (postimg) {
      imgurl = await uploadOnCloudinary(postimg);
    }

    const client = await Client.findOne({ username });
    if (!client) {
      return res.status(404).json(new ApiResponse(404, "Client not found"));
    }

    const post = new Post({
      postdisc: disc,
      postimgurl: imgurl ? imgurl.url : null,
      owner: client._id,
    });

    await post.save();

    // Update the client to add the new post to its posts array
    client.clientpost.push(post._id);
    await client.save();

    return res
      .status(201)
      .json(new ApiResponse(201, post, "Post created successfully"));
  } catch (error) {
    console.error("Error creating post:", error);
    return res.status(500).json(new ApiResponse(500, "Internal server error"));
  }
});

const getAllPost = asyncHandler(async (req, res) => {
  const username = "testingsuser";
  if (!username) {
    return res.status(400).json(new ApiResponse(400, "Username is required"));
  }

  const post = await Post.find();
  return res.status(201).json(new ApiResponse(201, post, "all post"));
});

const getAllCommentOnPost = asyncHandler(async (req, res) => {
  const username = "testingsuser";
  if (!username) {
    return res.status(400).json(new ApiResponse(400, "Username is required"));
  }

  const postid = req.body.id;

  const post = await Post.findById(postid);

  return res
    .status(201)
    .json(new ApiResponse(201, post.comments, "comments found successfully"));
});

const addComments = asyncHandler(async (req, res) => {
  const username = "testingsuser";
  if (!username) {
    return res.status(400).json(new ApiResponse(400, "Username is required"));
  }

  const comment = req.body.commnet;
  const postid = req.body.id;

  const post = await Post.findById(postid);

  post.comments.push(comment);
  await post.save();

  res.status(201).json(new ApiResponse(201, "commnet added"));
});

export {
  registerClient,
  createPost,
  getAllPost,
  getAllCommentOnPost,
  addComments,
};
