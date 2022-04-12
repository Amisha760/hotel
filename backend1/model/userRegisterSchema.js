const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const userRegisterSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number

    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }
});
//to secure the password by hashing it 
//middleware
//use function instead of fat arrow beacuse it dosesnot work with this keyword
userRegisterSchema.pre('save', async function(next){
    //check if password is wriiten or changed
    //in case of passwrod then this function called
    if(this.isModified('password')){
       this.password=await bcrypt.hash(this.password,12);
       this.cpassword= await bcrypt.hash(this.cpassword,12);
    }
    next();
})


const User=mongoose.model('USER',userRegisterSchema);
module.exports=User;