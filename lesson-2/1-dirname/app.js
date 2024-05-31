//корінь нашого коду  файл який ми будемо запускати

const movies = require('./movies/movies');

movies.readMovies()
.then((data) => console.log(data))
.catch((error) => console.error(error));