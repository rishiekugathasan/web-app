const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Coach = require("./models/coachModel");
const Package = require("./models/programPackage");

let allCoaches = require("./coaches.json");

mongoose.connect('mongodb://localhost/myCureData', {useNewUrlParser: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  mongoose.connection.db.dropDatabase(function(err, result){
	  
	let c1 = {
		name: "Jeff",
		bio: "Likes to cook",
		rate: 1.77
	}
	
	Coach.create(c1, function(err, result){
		if(err){
			console.log(err);
			return;
		}
		
		Coach.insertMany(allCoaches, function(err, result) {
			if(err){
				console.log(err);
				return;
			}
			
			console.log("Inilialized; ");
			mongoose.connection.close();
		});
	});

    /*Movie.insertMany(allMovies, function(err, result){
  	  if(err){
  		  console.log(err);
  		  return;
  	  }
  	  
      //Add all of the people documents to the database
      Person.insertMany(allPeople, function(err, result){
    	  if(err){
    		  console.log(err);
    		  return;
    	  }
		  
		  console.log("Successfully initialized server.");
		  mongoose.connection.close();
      });*/
	});
});
//});