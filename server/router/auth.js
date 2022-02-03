const express = require("express"); // importing express
const bcrypt = require("bcryptjs"); // importing bcrypt
const router = express.Router(); // importing Router from express
const jwt = require('jsonwebtoken'); // importing json webtoken


require("../Db/conn");
const User = require("../model/userSchema");

/// Backend routing

router.get("/", (req, res) => {
  res.send("Hello");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body; // object destructure

  // checking the field are fill
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Fill all the fields properly" });
  }
  try {
    const userExist = await User.findOne({ email: email }); // checking the email if its exist or not

    if (userExist) {
      return res.status(422).json({ error: "Email already Exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Rewrite the same password" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword }); // create the new document

      // save the data in db  *  middleware is being used for hash password before saving it *
      await user.save();

      res.status(201).json({ message: "user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// route for login
router.post("/signin", async (req, res) => {
  try{
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "plz fill the field" });
    }  
    const userLogin = await User.findOne({ email: email });  
    if(userLogin){
        const match = await bcrypt.compare(password,userLogin.password)

        // Generating json webtoken
        const token = await userLogin.generateAuthToken();

        // using cookie to store token
        res.cookie('jwtoken',token,{
            expires: new Date(Date.now() + 25892000000),
            httpOnly:true
        })

        if(!match){
            res.status(400).json({error:"Invalid credentials"})
        }else{
            res.json({message:"Successfully login"})
        } 
    }else{
        res.status(400).json({error:"Invalid credentials"})
    }
  }catch(error){
    console.log(error)
  }
});

module.exports = router;
