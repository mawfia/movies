import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movie';
import { Review } from '../../review';
import { MovieService } from './../../services/movie.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
	
	movie: Movie = new Movie();
	review: Review = new Review();

	constructor(private _movieService: MovieService, private _route: ActivatedRoute, private _router: Router) { 
		
		this._route.paramMap.subscribe( params => {
			   this._movieService.movie(params.get('id')).subscribe( result => {
				   if(result['message'] == 'Success') this.movie = result['movie'];
				   else this._router.navigate(['/']);
			   });
		  })
	}

	ngOnInit() {
	}

	deleteMovie(): void{
		this._movieService.destroy(this.movie._id).subscribe( result => {
			if(result['message'] == 'Success') this._router.navigate(['/movies']);
			//else console.log(result);
		})
	}
	
	addReview(review: Review): void{
		
		this.movie.reviews.push(this.review);
		this._movieService.update(this.movie).subscribe( result => {
			if(result['message'] == 'Success') this._router.navigate(['/movies']);
			//else console.log(result);
		})
	}
	
	deleteReview(review: Review): void{
		
		this.movie.reviews = this.movie.reviews.filter( r => r !== review);
		this._movieService.update(this.movie).subscribe( result => {
			//if(result['message'] == 'Success') console.log(result);
			//else console.log(result);
		})
	}
}
