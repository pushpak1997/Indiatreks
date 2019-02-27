var mongoose=require("mongoose");
var Campground =require("./models/campground");
var Comment =require("./models/comment");
var data=[
	{
		name: "sexy clouds",
		image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f1c179a0efbdba_340.jpg",
		description: "The journey starts at the mountain town of Leh. The only way to reach Leh is by flight and it is surrounded by snow giving it a complete white look. One can catch a glimpse of the snow capped mountains from the flight as it descends toward Leh which is located at 11400 feet above sea level. The trek is over the Zanskar River which lies frozen during the winter. The most preferred time to cross the ice would be in February. During that time, the ice tends to be at its most stable state. The Frozen River Trek begins from the small village of Chilling from where the Zanskar River begins to freeze."

	},
	{
		name: "sexy clouds",
		image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f1c179a0efbdba_340.jpg",
		description: "The journey starts at the mountain town of Leh. The only way to reach Leh is by flight and it is surrounded by snow giving it a complete white look. One can catch a glimpse of the snow capped mountains from the flight as it descends toward Leh which is located at 11400 feet above sea level. The trek is over the Zanskar River which lies frozen during the winter. The most preferred time to cross the ice would be in February. During that time, the ice tends to be at its most stable state. The Frozen River Trek begins from the small village of Chilling from where the Zanskar River begins to freeze."

	},
	{
		name: "sexy clouds",
		image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f1c179a0efbdba_340.jpg",
		description: "The journey starts at the mountain town of Leh. The only way to reach Leh is by flight and it is surrounded by snow giving it a complete white look. One can catch a glimpse of the snow capped mountains from the flight as it descends toward Leh which is located at 11400 feet above sea level. The trek is over the Zanskar River which lies frozen during the winter. The most preferred time to cross the ice would be in February. During that time, the ice tends to be at its most stable state. The Frozen River Trek begins from the small village of Chilling from where the Zanskar River begins to freeze."

	}
]

function seedDB(){
	//remove all campgrounds
	Comment.remove({},function(err){
	if(err){
		console.log(err);
	}
	else{ 
		console.log("removed comments");
	}
});
	Campground.remove({},function(err){
	// if(err){
	// 	console.log(err);
	// }
	// else{ 
	// 	console.log("removed camgrounds");
	// 	//add a few campgrounds
	// 	data.forEach(function(seed){
	// 		Campground.create(seed,function(err,campground){
	// 			if(err){
	// 				console.log(err);
	// 			}
	// 			else{
	// 				console.log("added a campground");
	// 				//create a comment
	// 				Comment.create(
	// 					{
	// 						text:"this is great place , bur i wish there was internet",
	// 						author:"pushpak"
	// 					},function(err,comment){
	// 						if(err){
	// 							console.log(err);
	// 						}
	// 						else{
	// 							campground.comments.push(comment);
	// 							campground.save();
	// 							console.log("created new comment");
	// 						}
							
	// 					});
	// 			}
	// 		});
	// 	});
	// }
});
	

}

module.exports=seedDB;
