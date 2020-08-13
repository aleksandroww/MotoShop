// React and style
import React, { useEffect, useState } from 'react';
import styles from './index.module.css';

// Services
import { bikeService } from 'shared/services';

// Screens
import NotFound from 'screens/NotFound';

// Components
import Loading from 'shared/components/Loading';

function Bike({ match: { params } }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const fetchedPost = await bikeService.getBike(params.id);
      setPost(fetchedPost);
      setLoading(false);
    })();
  }, [params]);

  const deletePost = async () => {
    try {
      await bikeService.deleteBike(params.id);
      window.location = '/';
    } catch (e) {
      console.log(e);
    }
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <Loading width={50} height={50} color='#214c78' />
      </div>
    );
  }

  if (!post) {
    return <NotFound />;
  }

  return (
    <main className={styles.bike}>
      <div className={['img-container']}>
        <img src={post.url} alt='moto' width='200px' height='300px' />
        <button onClick={() => deletePost(params.id)}>Delete</button>
      </div>
    </main>
  );
}

export default Bike;
