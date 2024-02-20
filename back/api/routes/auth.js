const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {

  const {username, email, password} = req.body
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    // const newUser = new User({
    //   username: req.body.username,
    //   email: req.body.email,
    //   password: hashedPass,
    // });

    
    console.log(username, email, hashedPass)

    
    // console.log(User)

    const newUser = new User({
      username: username,
      email: email,
      password: hashedPass
    })

    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong credentials!");

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;











// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");

// // Registration endpoint
// router.post("/register", async (req, res) => {
//     try {
//         // Create a new user instance based on the request body
//         const newUser = new User({
//             username: req.body.username,
//             email: req.body.email,
//             password: req.body.password,
//         });

//         // Save the new user to the database
//         const user = await newUser.save();

//         // Send a success response with the newly created user
//         res.status(200).json(user);
//     } catch (error) {
//         // Handle errors appropriately
//         // In a production environment, avoid sending detailed error messages to clients for security reasons
//         res.status(500).json({ error: "Internal server error" });
//     }
// });

// module.exports = router;
