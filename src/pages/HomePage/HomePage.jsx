import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from '../../components/MovieList/MovieList';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/trending/movie/day', {
      headers: {
        Authorization: 'Bearer YOUR_API_TOKEN',
      },
    })
    .then(response => setMovies(response.data.results))
    .catch(error => console.error(error));
  }, []);

  return (
    <div className={styles.homepage}>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
