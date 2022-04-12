
const express=require("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config({path:"./config.env"});
app.use(express.json());
//dotenv is used to secure the database ,passwords.
require("./db/connection");
//we connect the router  files here
 app.use(require("./router/auth"));
//  app.get("/",(req,res)=>{
//      res.send("hello");
//  })
 app.listen(6000);