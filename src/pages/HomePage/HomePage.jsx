import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { fetchTrendingMovies } from '../../components/TBDM-API/TBDM-API';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
