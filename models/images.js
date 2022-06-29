var mongoose = require('mongoose'); 
  
var imageSchema = new mongoose.Schema({ 
    name: {
		 type: String,
       
	}, 
    desc:{
		type:String, 
		
	},
	epicno:{
		type:Number,
		minLength:10,
        maxLength:10,
	},
    img: 
    { 
        data: Buffer, 
        contentType: String ,
		
    },
	coordinates: { type : Array , "default" : [] },
	city:{
		type:String, 
		
	},
	state:{
		type:String, 
		
	},
	pincode:{
		type: Number,
		
		minLength: 6,
        maxLength: 6,
	},
	email: {
        type: String,
        lowercase: true,
    },
	
	
	created: {type: Date,default: Date.now}
}); 

module.exports = new mongoose.model('Image', imageSchema); 
