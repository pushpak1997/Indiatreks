var mongoose=require("mongoose");
var passportLocaMongoose=require("passport-local-mongoose");
   
var UserSchema =new mongoose.Schema({
	username:String,
	password:String
});

UserSchema.plugin(passportLocaMongoose);

module.exports=mongoose.model("User",UserSchema);
