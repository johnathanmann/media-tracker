const router = require("express").Router();
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} = require("../../controllers/postController");

// /api/posts
router.route("/").get(getAllPosts).post(createPost);
// /api/posts/:postId
router.route("/:postId").get(getPostById).put(updatePost).delete(deletePost);

module.exports = router;
