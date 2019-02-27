var express=require("express");
var router=express.Router({mergeParams:true});
var Campground=require("../models/campground");
var Comment=require("../models/comment");
var middleware=require("../middleware");
///===================
///comments route
////==================

//commen5ts new
router.get("/new",middleware.isLoggedIn,function(req,res){
	//res.send("this will be comment form");
	//find campgriongd by id
	Campground.findById(req.params.id,function(err,campground){
		if(err){
			console.log("err");
		}else{
			res.render("comments/new",{campground: campground});
		}
	});

	
});

//comments create
router.post("/",middleware.isLoggedIn,function(req,res){
	//lookup usinng id
	Campground.findById(req.params.id,function(err,campground){
		if(err){
			console.log("err");
			redirect("/campgrounds");
		}else{
			//console.log(req.body.comment);
			Comment.create(req.body.comment,function(err,comment){
				if(err){
					console.log("err");
				}
				else{
					//add username and id to a comment
					comment.author.id=req.user._id;
					comment.author.username=req.user.username;		
					//save comment
					comment.save();
					campground.comments.push(comment);
					campground.save();
					res.redirect("/campgrounds/"+campground._id);
				}
			});
		}
	})
	//create new comment
	//connect new commentto campground
	//redirect campground show page
});
//edit comment route
router.get("/:comment_id/edit",middleware.checkCommentOwnership,function(req,res){
	Comment.findById(req.params.comment_id,function(err,foundComment){
		if(err){
			res.redirect("back");
		}
		else{
			res.render("comments/edit",{campground_id:req.params.id,comment:foundComment});
		}
	})
});
//update
router.put("/:comment_id",middleware.checkCommentOwnership,function(req,res){
	Comment.findByIdAndUpdate(req.params.comment_id,req.body.comment,function(err,updatedComment){
		if(err){
			res.redirect("back");
		} else{
			res.redirect("/campgrounds/"+req.params.id);
		}
	});
});
//delete
router.delete("/:comment_id",middleware.checkCommentOwnership,function(req,res){
	Comment.findByIdAndDelete(req.params.comment_id,function(err){
		if(err){
			res.redirect("back");
		} else{
			res.redirect("/campgrounds/"+req.params.id);	
		}
	});
});


module.exports =router;