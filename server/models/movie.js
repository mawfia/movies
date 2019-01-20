const mongoose = require('./../config/mongoose.js');
const { ReviewSchema } = require('./review.js');

const MovieSchema = new mongoose.Schema({
    title : {type: String, required: [true, ' Movie title missing.'], minlength : [3, 'Title length must be atleast 3 charaters.'], maxlength : [25, 'Title length must be shorter than 26 characters.']},
	reviews : {type: [ReviewSchema], required : [true, 'Movie is missing a review.']}
}, {timestamps: true })

mongoose.model('Movie', MovieSchema);
const Movie = mongoose.model('Movie');

module.exports = Movie;