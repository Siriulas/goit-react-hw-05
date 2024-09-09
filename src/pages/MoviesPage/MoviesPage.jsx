import { useState } from 'react';
import axios from 'axios';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = () => {
    axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}`, {
      headers: {
        Authorization: 'Bearer YOUR_API_TOKEN',
      },
    })
    .then(response => setMovies(response.data.results))
    .catch(error => console.error(error));
  };

  return (
    <div className={styles.moviesPage}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies"
        className={styles.input}
      />
      <button onClick={handleSearch} className={styles.button}>Search</button>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
