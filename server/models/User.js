const { Schema, model, Types } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Enter a valid email"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  albums: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  anime: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  comics: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  manga: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  movies: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  tv: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  games: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ]
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  console.log(this);
  return await bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
