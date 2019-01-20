const movies = require('./../controllers/movies.js');

module.exports = app => {

    app.get(['/movies/index'], (request, response) => {

        movies.index(request, response);
    })
	
	app.post(['/movies/movie'], (request, response) => {

        movies.movie(request, response);
    })
	
	app.post('/movies/create', (request, response) => {
		
		movies.create(request, response);
	})
	
	app.put('/movies/update',(request, response) => {
		
		movies.update(request, response);
	})
	
	app.delete('/movies/delete/:id', (request, response) => {
		
		movies.destroy(request, response);
	})
	
	app.all('*', (request, response) => {
		
		movies.all(request, response);
	})
}