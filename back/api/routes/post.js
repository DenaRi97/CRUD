const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

// CREATE POST
router.post("/", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(201).json(savedPost); // 201 status code for resource creation
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    if (post.username !== req.body.username) {
      return res.status(401).json({ error: "You can update only your post!" });
    }
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    if (post.username !== req.body.username) {
      return res.status(401).json({ error: "You can delete only your post!" });
    }
    await post.delete();
    res.status(200).json({ message: "Post has been deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ALL POSTS
router.get("/", async (req, res) => {
  const { user: username, cat: catName } = req.query;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({ categories: { $in: [catName] } });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;