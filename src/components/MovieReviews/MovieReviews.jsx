import styles from './MovieReviews.module.css';

const MovieReviews = ({ reviews }) => (
  <ul className={styles.reviewList}>
    {reviews.map(review => (
      <li key={review.id} className={styles.reviewItem}>
        <p><strong>Author:</strong> {review.author}</p>
        <p>{review.content}</p>
      </li>
    ))}
  </ul>
);

export default MovieReviews;
