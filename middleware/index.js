var Campground=require("../models/campground");
var Comment =require("../models/comment");
var middlewareObj={};

middlewareObj.checkCampgroundOwnership = function(req,res,next){
			if(req.isAuthenticated()){

			Campground.findById(req.params.id,function(err,foundCampground){
				if(err){
					res.redirect("/campgrounds");
				}
				else{
					// does user own this campground
					if(foundCampground.author.id.equals(req.user._id)){
						next();
						//res.render("campgrounds/edit",{campground:foundCampground});
					} else{
						//res.send("you are not autherrized");
						res.redirect("back");
					}
					
				}
			});
		} else{
			//console.log("you need to log in for doing that");
			res.redirect("back");
		}
}
middlewareObj.checkCommentOwnership = function(req,res,next){
	if(req.isAuthenticated()){

		Comment.findById(req.params.comment_id,function(err,foundComment){
			if(err){
				res.redirect("back");
			}
			else{
				// does user own this campground
				if(foundComment.author.id.equals(req.user._id)){
					next();
					//res.render("campgrounds/edit",{campground:foundCampground});
				} else{
					//res.send("you are not autherrized");
					res.redirect("back");
				}
				
			}
		});
	} else{
			//console.log("you need to log in for doing that");
			res.redirect("back");
		}
}
middlewareObj.isLoggedIn= function(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}

module.exports=middlewareObj;