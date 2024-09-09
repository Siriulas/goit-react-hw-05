import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
      headers: {
        Authorization: 'Bearer YOUR_API_TOKEN',
      },
    })
    .then(response => setMovie(response.data))
    .catch(error => console.error(error));
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className={styles.details}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className={styles.poster}
      />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <Link to="cast" className={styles.link}>Cast</Link>
      <Link to="reviews" className={styles.link}>Reviews</Link>

      <Outlet />

      <Link to="/movies" className={styles.goBack}>Go back</Link>
    </div>
  );
};

export default MovieDetailsPage;
