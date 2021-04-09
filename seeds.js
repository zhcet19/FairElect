var mongoose = require("mongoose");
var imgModel = require("./models/images");
function seedDB(){
   
   imgModel.remove({}, function(err){
        if(err){
            console.log(err);
        }
        imgModel.remove({}, function(err) {
            if(err){
                console.log(err);
            }
            data.forEach(function(seed){
                imgModel.create(seed, function(err, campground){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("added a image");
                    }
                });
            });
        });
    }); 

}
module.exports = seedDB;







