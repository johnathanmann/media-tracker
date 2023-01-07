const User = require("../models/User");
const Post = require("../models/Post");

async function getAllPosts(req, res) {
  Post.find({})
        .then(allPosts => res.json(allPosts))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
}

async function getPostById(req, res) {
  try {
    const singlePost = await Post.findById(req.params.postId).select("-__v");
    res.status(200).json(singlePost);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}


async function createPost(req, res) {
  try {
    const newPost = await Post.create(req.body);
    let postType = req.body.type;
    console.log(postType)
    const associatedUser = await User.findOneAndUpdate(
      { _id: req.body.user },
      { $addToSet: { posts: newPost._id, [postType]: newPost._id } },
      { new: true }
    )
      .select("-__v")
      .populate("posts")
      .populate(postType);
    res.status(200).json(associatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

async function updatePost(req, res) {
  try {
    const updatedPost = await Post.findOneAndUpdate(
      { _id: req.params.postId },
      { $set: req.body },
      { new: true }
    ).select("-__v");
    res.status(200).json(updatedPost);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

async function deletePost(req, res) {
  try {
    await Post.findOneAndDelete({ _id: req.params.postId });
    const associatedUser = await User.findOneAndUpdate(
      { posts: req.params.postId },
      { $pull: { posts: req.params.postId } },
      { new: true }
    )
      .select("-__v")
      .populate("posts");
    res.status(200).json(associatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}



module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
};
