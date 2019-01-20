import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie';
import { Review } from '../review';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
	moviesObservers: BehaviorSubject<any[]> = new BehaviorSubject([]);

	constructor(private _http: HttpClient) {
		this.index();
	}
	
	index(): void{
		this._http.get<Movie>('/movies/index').subscribe(
			(observer) => { this.moviesObservers.next(observer['movies']); }
		);
	}
	
	create(movie: Movie): Observable<{}>{
		
		let observable = this._http.post<any>('/movies/create', movie);
		
		observable.subscribe( result => { this.index(); console.log(result); } );		
		
		return observable;
	}
	
	movie(id: string): Observable<{}>{
		return this._http.post<any>('/movies/movie', {id: id});
	}
	
	update(movie: Movie): Observable<{}>{
		let observable = this._http.put<Movie>(`/movies/update`, movie);
			
		observable.subscribe( result => {
			if(result['message'] = 'Success') this.index();
			else console.log(result);
		});
		
		return observable;
	}
	
	destroy(id: any): Observable<{}>{
		let observable = this._http.delete<any>(`/movies/delete/${id}`);
			
		observable.subscribe( result => {if(result['message'] = 'Success') this.index();} );
		
		return observable;
	}
}