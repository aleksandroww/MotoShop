// React and style
import React, { useEffect, useState, useContext } from 'react';
import styles from './index.module.css';

// Servies
import { postService } from 'shared/services';

// Context
import { UserContext } from 'App';

// Components
import ItemList from 'shared/components/ItemList';

function Posts() {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const postsData = await postService.getPersonalPosts(user.uid);
      setPosts(postsData);
      setLoading(false);
    })();
  }, [user.uid]);

  return (
    <main className={styles.posts}>
      <h1>My Bikes</h1>
      <ItemList posts={posts} loading={loading} />
    </main>
  );
}

export default Posts;
