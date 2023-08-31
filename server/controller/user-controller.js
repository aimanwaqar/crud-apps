//to container all call back functions

const User = require("../schema/user-schema.js");
const addUser =  async (request,response) =>{
   const user =  request.body;
   console.log(user);

   //making an object of schema and validating
   const newUser = new User(user);

   try{
      await newUser.save();
      response.status(201).json(newUser);
      console.log("Hurray");
   }catch(error){
       response.status(404);
   }
      
}

const getUsers = async (request,response) =>{
   try{
      const users = await User.find({});
      response.status(201).json(users);
   }catch(error){
     response.status(404).json({message: error.message});
   }
}

const getUser = async (request,response) =>{
   try{
      const user = await User.findById(request.params.id);
      response.status(201).json(user);
   }catch(error){
     response.status(404).json({message: error.message});
   }
}

const edituser = async(req,res)=>{
   let user = req.body;
   const editUser = new User(user);
   try{
       await User.updateOne({_id: req.params.id}, editUser);
       res.status(201).json(editUser);
   }catch(error){
      res.status(409).json({message: error.message});
   }
}

const deleteuser = async(req,res)=>{
   try{
       await User.deleteOne({_id: req.params.id});
       res.status(201).json({message:"User successfully deleted"});
   }catch(error){
      res.status(409).json({message: error.message});
   }
}

module.exports.addUser = addUser;
module.exports.getUsers = getUsers;
module.exports.getUser = getUser;
module.exports.edituser = edituser;
module.exports.deleteuser = deleteuser;

