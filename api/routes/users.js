const express = require('express');
const router = express.Router();
const User = require('../models/User');

/* GET user */
router.get('/:id', async (req, res, next) {
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
        await this.post.deleteMany({username: user.username});
        await User.findByIdAndDelete(user);
        res.status(500).json(error);
      }
    } catch (error) {
      res.status(404).json('User not found...');
    }
  } else {
    res.status(401).json('Unauthorized, you can only delete your own account');
  }
})


module.exports = router;
