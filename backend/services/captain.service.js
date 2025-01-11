const captainModel=require("../model/captain.model");
module.exports.createCaptain =async({
  firstName, lastName, email, password, color, plate, capacity, vehicleType
  
})=>{
  
 if(!firstName||!lastName||!email||!password||!color||!plate||!capacity||!vehicleType){
  return {status:400,message:"Please fill all the fields"};
 }
 const captain = await captainModel.create({
  fullName:{
    firstName,
    lastName
  }, email, password, vehicle:{
    color, plate, capacity, vehicleType
  },
  });
return captain;
}