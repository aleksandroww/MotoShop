// React and style
import React from 'react';
import styles from './index.module.css';

// Components
import BikeCard from 'shared/components/Bike/BikeCard';
import Loading from 'shared/components/Loading';

function BikeList({ posts, loading }) {
  if (loading) {
    return (
      <div className={styles.loading}>
        <Loading color='#214c78' width={50} height={50} />
      </div>
    );
  }

  return (
    <ul className={styles['bike-list']}>
      {posts.map((post, i) => (
        <BikeCard {...post} key={i} />
      ))}
    </ul>
  );
}

export default BikeList;
