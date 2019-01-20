const mongoose = require('./../config/mongoose.js');

const ReviewSchema = new mongoose.Schema({
    name : {type: String, required: [true, 'Name of reviewer is missing.'], minlength : [3, "Review's name must be atleast 2 charaters."], maxlength : [25, "Reviewer's name must be shorter than 26 characters."]},
	rating : {type: Number, required: [true, 'Rating is missing.'], min : [1, 'Review must have rating of 1 to 5 stars.'], max : [5, 'Review must have rating of 1 to 5 stars.']},
    summary : {type: String, required: [true, 'Review is missing content'], minlength : [3, 'Review content length must be greater than 2 charaters'], maxlength : [200, 'Review content length must be shorter than 200 characters.']},
}, {timestamps: true })

mongoose.model('Review', ReviewSchema);
const Review = mongoose.model('Review');
module.exports = { Review, ReviewSchema };