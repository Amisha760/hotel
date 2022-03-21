const authenticate=require("../middleware/authenticate");

const express=require("express");
const router=express.Router();
const cookieParser = require("cookie-parser");
const bcrypt=require("bcrypt");
const jwt=require('jsonwebtoken');
require("../db/connection");
const User=require("../model/userRegisterSchema");
router.use(cookieParser());

// router.get("/",(req,res)=>{
//     res.send("hello from router");
// })

router.post('/register',async (req,res)=>{
    // console.log(req.body);
    const {name , email,password,cpassword}=req.body;
    if(!name || !email || !password || !cpassword){
        return res.status(422).json({error:"please fill all feilds"});
    }
    //check if user already registered 
try{
    const userExist = await User.findOne({email:email});

    if(userExist){
            return  res.status(422).json({error:"user already exist"});
              } else if(password!=cpassword)
              {
                return  res.status(422).json({error:"password and confirm password doesnot match"});
              }else{
                const user=new User({name,email,password,cpassword});
         
              await user.save();
                     res.json({message:"registered sucessfully"});
                    //  console.log(req.body);
                
              }

   
} catch(err){
    console.log(err);
}
})
//login page

router.post("/login",async(req,res)=>{
    try{
    const {email,password}=req.body;
     if(!email || !password){
         return res.status(400).json({error:"please fill complete details"})
     }

     const userLogin=await User.findOne({email:email});
      // console.log(userLogin);
      if(userLogin){
         const passMatch= await bcrypt.compare(password,userLogin.password);
         const token= await userLogin.generateAuthToken();
         console.log(token);
         //store in cokkies for auththentication
         res.cookie("jwtoken",token,{
           expires:new Date(Date.now()+86400000),
           httpOnly:true
         });
      if(!passMatch){
        res.status(400).json({error:"invalid credentials pass"});
      } else{
    res.json({message:"user logged in sucessfully"});
      }
    }else{
        res.status(400).json({error:"invalid credentials"});
      }

} catch(err){
  console.log(err);
}
});
//contact us page
router.post("/contactus" ,async(req,res)=>{
  try{
      const {name,email,phone,message}=req.body;
      if(!email || !name || !phone || !message)
      return res.status(421).json({error:"please fill complete details"});
       const userlogin=await User.findOne({email:email});
       if(userlogin){
       res.json({message:"your message is submitted"});
       }
       else
       res.status(421).json({message:"you are not registred"});

  }catch(err){
    console.log(err);
  }
});

router.get("/paymentb",authenticate,(req,res)=>{

  res.send(req.rootUser);
});

router.get("/logout",(req,res)=>{
  console.log("hello logout hogya");
  res.clearCookie('jwtoken');
  res.status(200).send("user logout");
});



module.exports=router;



//using prmises
 // .then((userExist)=>{
    //        if(userExist){
    //        return  res.json({error:"user already exist"});
    //        }

    //        const user=new User({name,email,password,cpassword});
    //       user.save().then(() => {
    //           res.status(201).json({message:"user registred sucessfully"});
    //       }).catch((err)=> res.status(500).json({error:"failed to register"}));
    // }).catch(err=>{
    //     console.log(err);
    // })