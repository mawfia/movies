const Movie = require('./../models/movie.js');
const Review = require('./../models/review.js');
const mongoose = require('./../config/mongoose.js');
const path = require('path');

module.exports = {

    index : (request, response) => {
            
			Movie.find({}, (err, movies) => {
                
				if(err) return response.json({message: 'Error', error: err});
				else return response.json({message: 'Success', movies});
            })
	},
	
	movie : (request, response) => {
            
			Movie.findOne({_id: mongoose.Types.ObjectId(request.body.id)}, (err, movie) => {
                
				if(err) return response.json({message: 'Error', error: err});
				if(movie) return response.json({message: 'Success', movie: movie});
            })
	},
	
	create : (request, response) => {
		
	    let movie = new Movie({title: request.body.title});
		movie.reviews.push(request.body.reviews[0]);

        movie.save( err => {
			if(err) {
				let errors = {};
				for(let error in err.errors) {
					
					let tag = error.startsWith('reviews') ? error.split('.')[2] : error;
					errors[tag] = (err.errors[error].message);
				}
				return response.json({message: 'Error', errors: errors});
			}
			else return response.json({message: 'Success'});
        })
    },

    update : (request, response) => {

        Movie.update({_id: request.body._id}, {$set : {reviews : request.body.reviews}}, {runValidators: true}, err => {
            if(err){
                let errors = {};
				for(let error in err.errors) {
					let tag = error.startsWith('reviews') ? error.split('.')[2] : error;
					errors[tag] = (err.errors[error].message);
				}
				return response.json({message: 'Error', errors: errors});
            }
            else {
                return response.json({message: 'Success'});
            }
        })
    },
	
	destroy : (request, response) => {
		
		Movie.remove({_id: mongoose.Types.ObjectId(request.params.id)}, err => {
            if(err){
                let errors = {};
				for(let error in err.errors) errors[error] = (err.errors[error].message);
				return response.json({message: 'Error', errors: errors});
            }
            else {
                return response.json({message: 'Success'});
            }
        })
    },
	
		all : (request, response) => {
		
		return response.sendFile(path.resolve("./dist/index.html"));
	}
}