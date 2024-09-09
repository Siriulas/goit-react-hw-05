import styles from './MovieCast.module.css';

const MovieCast = ({ cast }) => (
  <ul className={styles.castList}>
    {cast.map(actor => (
      <li key={actor.id} className={styles.castItem}>
        <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.name} className={styles.castImage} />
        <p>{actor.name}</p>
      </li>
    ))}
  </ul>
);

export default MovieCast;
