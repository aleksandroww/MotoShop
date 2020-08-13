// React and style
import React, { useEffect, useState, useContext } from 'react';
import styles from './index.module.css';

// Router and Routes
import { Link } from 'react-router-dom';
import { routes } from 'shared/constants/routes';

// Services
import { bikeService } from 'shared/services';

// Context
import { UserContext } from 'App';

// Components
import BikeList from 'shared/components/Bike/BikeList';
import Loading from 'shared/components/Loading';

function Bikes() {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const postsData = await bikeService.getUserBikes(user.uid);
      setPosts(postsData);
      setLoading(false);
    })();
  }, [user.uid]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <Loading width={50} height={50} color='#214c78' />
      </div>
    );
  }

  if (!posts.length) {
    return (
      <div className={styles['no-bikes']}>
        <h2>You don't have any bikes!</h2>
        <Link to={routes.create}>Upload Bike Here</Link>
      </div>
    );
  }

  return (
    <main className={styles.bikes}>
      <h1>My Bikes</h1>
      <BikeList posts={posts} loading={loading} />
    </main>
  );
}

export default Bikes;
