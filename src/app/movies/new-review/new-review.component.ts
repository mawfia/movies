import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movie';
import { Review } from '../../review';
import { MovieService } from './../../services/movie.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {
	
	movie: Movie = new Movie();
	review: Review = new Review();
	errors: any = null;
	
	ratings: string[]=['Choose...', '1', '2', '3', '4', '5'];

	constructor(private _movieService: MovieService, private _route: ActivatedRoute, private _router: Router) { }

	ngOnInit() {
		this._route.paramMap.subscribe( params => {
			   this._movieService.movie(params.get('id')).subscribe( result => {
				   if(result['message'] == 'Success') this.movie = result['movie'];
				   else this._router.navigate(['/movies']); // Means user entered erroneous url and should be redirected to movie list view
			   } );
		  })
	}
	
	addReview(review: Review): void{
		this.errors = null;
		this.movie.reviews.push(this.review);
		this._movieService.update(this.movie).subscribe( result => {
			if(result['message'] == 'Success') this._router.navigate(['/movies']);
			else this.errors = result['errors'];
		})
	}
}
