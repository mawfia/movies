import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { NewMovieComponent } from './movies/new-movie/new-movie.component';
import { MovieComponent } from './movies/movie/movie.component';
import { NewReviewComponent } from './movies/new-review/new-review.component';

import { MovieService } from './services/movie.service';

import { AppRoutingModule } from './app-routing.module';

 // <--- Routing rules imported

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NewMovieComponent,
    MovieListComponent,
    MovieComponent,
    NewReviewComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpClientModule,
	AppRoutingModule // <--- Our routing rules
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
