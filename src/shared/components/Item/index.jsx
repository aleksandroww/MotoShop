// React and style
import React from 'react';
import styles from './index.module.css';

// Router
import { Link } from 'react-router-dom';

function CurrentItem({ brand, model, year, power, capacity, url, price, id }) {

  return (
    <li className={styles.item}>
      <Link to={`/post/${id}`}>
        <div className={styles['img-container']}>
          <img src={url} alt=''/>
        </div>

        <div className={styles.description}>
          <p className={styles.name}>
            {brand} {model}
          </p>
          <p>Capacity: {capacity} cp</p>
          <p>Power: {power} hp</p>
          <p>Year: {year}</p>

          <p className={styles.price}>{price} $</p>
        </div>
      </Link>
    </li>
  );
}

export default CurrentItem;
