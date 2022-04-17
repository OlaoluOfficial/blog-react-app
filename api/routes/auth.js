const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//Register

router.post('/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(404).json('Wrong credentials');

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(404).json('Wrong credentials');

    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    res.status(500).json(error);
  }
});