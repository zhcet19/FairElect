var mongoose = require('mongoose'); 
  
var imageSchema = new mongoose.Schema({ 
    name: {
		 type: String,
       
	}, 
    desc:{
		type:String, 
		
	},
    img: 
    { 
        data: Buffer, 
        contentType: String ,
		
    } ,
	localadd:{
		type:String, 
		
	}, 
	city:{
		type:String, 
		
	},
	state:{
		type:String, 
		
	},
	pincode:{
		type: Number,
		
		minLength: 5,
        maxLength: 5,
	},
	email: {
        type: String,
        lowercase: true,
    },
	
	
	created: {type: Date,default: Date.now}
}); 

module.exports = new mongoose.model('Image', imageSchema); 
