import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movie';
import { Review } from '../../review';
import { MovieService } from './../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

	movies: Movie[] = [];
	newMovie: boolean = false;

	constructor(private _movieService: MovieService) { }

	ngOnInit() {
		this._movieService.moviesObservers.subscribe( 
			(movies: Movie[]) => { this.movies = movies; }		
		)
	}
	
	showAddMovieComponent(data: boolean): void{
		this.newMovie = data;
	}
	
	addMovie(): void{
		this.newMovie = !this.newMovie;
	}
	
	average(reviews: Review[]): number{
		let sum: number = 0;
		reviews.forEach( review => { sum += review.rating; } );
		return sum / reviews.length;
	}

}
