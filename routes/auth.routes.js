const router = require("express").Router();
const User = require("../models/User.model")


router.get('/', (req, res, next) => {
  res.render("index");
})

//get to display the signup form

router.get('/signup', (req, res, next) => {
    res.render('auth/signup');
  })

  // post to work with the values of the signup form
router.post("/signup", async (req, res, next) => {
  try {
    const newUser = await User.create(req.body)
    console.log(newUser) 
  } catch(error) {
    console.log(error)
  }
  })

module.exports = router;
