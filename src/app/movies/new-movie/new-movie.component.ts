import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { of, Observable, BehaviorSubject, Observer } from 'rxjs';
import { Movie } from '../../movie';
import { Review } from '../../review';
import { MovieService } from './../../services/movie.service';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {
	
	@Input() newMovie: boolean;
	@Output() cancelAddMovieEventEmitter = new EventEmitter();
	
	movie: Movie = new Movie();
	ratings: string[]=['Choose...', '1', '2', '3', '4', '5'];
	errors: any = null;

	constructor(private _movieService: MovieService) {
		
	}

	ngOnInit() {
		this.movie.reviews.push(new Review());
	}
	
	cancel(): void{
		this.cancelAddMovieEventEmitter.emit(false);
	}

	create(movie: Movie): void{
		this.errors = null;
		let observable = this._movieService.create(this.movie).subscribe( result => {
			if(result['message'] == 'Success') {
				this._movieService.index();
				this.movie = new Movie();
				this.movie.reviews.push(new Review());
				this.cancel();
			}
			else this.errors = result['errors'];
		});
	}
}
