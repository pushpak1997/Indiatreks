var express=require("express");
var router=express.Router();
var Campground=require("../models/campground");
var middleware=require("../middleware");

//### INDEX - show all campground
router.get("/",function(req,res){
	//Get all campground from db

	Campground.find({},function(err,allCampgrounds){
		if(err){
			console.log(err);
		} else{
			res.render("campgrounds/index",{campgrounds:allCampgrounds});
		}

	});
	//res.render("campgrounds",{campgrounds:campgrounds});
});

//### CREATE - add new campgroup to db
router.post("/",middleware.isLoggedIn,function(req,res){
	//res.send("you hit post route")
	//get data from form and add to campground array
	var name =req.body.name;
	var image =req.body.image;
	var desc=req.body.description;
	var author={
		id:req.user._id,
		username: req.user.username
	}
	var newCampground= {name:name,image:image,description:desc,author:author};
	//create new campground and save to db
	Campground.create(newCampground,function(err,newlyCreated){
		if(err){
			console.log(err);
		} else{
			console.log(newlyCreated);
			res.redirect("/campgrounds");
		}
	});
	//campgrounds.push(newCampground);
	//redirect back to campground page
	
});

//### NEW - show form to create new campgroup
router.get("/new",middleware.isLoggedIn,function(req,res){
	res.render("campgrounds/new.ejs")
});

//### SHOW - shows moer info about one campground
router.get("/:id",function(req,res){
	//find the campground with provided id
	//render show template with that campground
	Campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){
		if(err){
			console.log(err);
		} else{
			console.log(foundCampground);
			//render show template with that campground
			res.render("campgrounds/show",{campground:foundCampground});
		}
	});
});
//edit campground route
router.get("/:id/edit",middleware.checkCampgroundOwnership,function(req,res){
	Campground.findById(req.params.id,function(err,foundCampground){
		res.render("campgrounds/edit",{campground:foundCampground});
});
});
//update campground route
router.put("/:id",middleware.checkCampgroundOwnership,function(req,res){
	var data={name:req.body.name,image:req.body.image,description:req.body.description};
	Campground.findByIdAndUpdate(req.params.id,data,function(err,updatedCampground){
		if(err){
			res.redirect("/campgrounds");
		}
		else{
			res.redirect("/campgrounds/"+req.params.id);
		}
	});	
});
//destroy routwe
router.delete("/:id",middleware.checkCampgroundOwnership,function(req,res){
	Campground.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect("/campgrounds");
		}
		else{
			res.redirect("/campgrounds");
		}
	})
})

module.exports=router;