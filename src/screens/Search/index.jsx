// React and style
import React, { useEffect, useState } from 'react';
import styles from './index.module.css';

// Servies
import { bikeService } from 'shared/services';

// Components
import BikeList from 'shared/components/Bike/BikeList';
import Loading from 'shared/components/Loading';

function Search({ location }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const postsData = await bikeService.getBikesByQuery(location.search);
      setPosts(postsData);
      setLoading(false);
    })();
  }, [location]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <Loading width={50} height={50} color='#214c78' />
      </div>
    );
  }

  if (!posts.length) {
    return (
      <div className={styles['no-posts']}>
        <h2>No posts found!</h2>
      </div>
    );
  }

  return (
    <main className={styles.search}>
      <h1>Items found</h1>
      <BikeList posts={posts} loading={loading} />
    </main>
  );
}
export default Search;
