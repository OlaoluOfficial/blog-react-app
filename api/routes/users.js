const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');

/* GET user */
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      if (user) {
        await this.post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(user);
        res.status(200).json({ message: 'User deleted' });
      } else {
        res.status(500).json(error);
      }
    } catch (error) {
      res.status(404).json('User not found...');
    }
  } else {
    res.status(401).json('Unauthorized, you can only delete your own account');
  }
});

// Update
router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json('Unathorized, you can only update your own account');
  }
});

module.exports = router;
