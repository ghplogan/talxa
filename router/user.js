// const express = require('express')
// const {User, validateUser} = require('../model/user-model')
// const router = express.Router();

// router.post("/", async(req, res)=>{
//      console.log(req.body);
//      const user = new User({
//         name:req.body.name,
//         address:req.body.address
//      })

//     const result = await user.save();
//     res.send(result);
// })


// router.get("/", async(req, res)=>{
//     const result = await User.find({});
// res.send(result); 

// })


// module.exports = router;