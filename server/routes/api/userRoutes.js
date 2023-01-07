const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
  getUserPosts
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getAllUsers).post(createUser);
router.route("/login").post(loginUser);
// /api/users/:userId
router.route("/:userId").get(getUserById).put(updateUser).delete(deleteUser);
// /api/users/posts/:userId
router.route("/posts/:userId").get(getUserPosts)

module.exports = router;
