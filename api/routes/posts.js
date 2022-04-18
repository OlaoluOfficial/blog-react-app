const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');

// Create post
router.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(400).json(error);
  }
});
