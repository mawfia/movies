import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { NewMovieComponent } from './movies/new-movie/new-movie.component';
import { MovieComponent } from './movies/movie/movie.component';
import { NewReviewComponent } from './movies/new-review/new-review.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/movies' },
  { path: 'movies', component: MoviesComponent, children:[
		{ path: '', component: MovieListComponent},
		{ path: ':id', component: MovieComponent },
		{ path: ':id/review', component: NewReviewComponent }
   ]},
  { path: '*', redirectTo: '/movies'}
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
