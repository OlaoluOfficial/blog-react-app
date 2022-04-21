const express = require('express');
const router = express.Router();

/* GET user */
router.get('/:id', async (req, res, next) {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    res.status(500).send(error);
  }
});



module.exports = router;
