// React and style
import React, { useEffect, useState } from 'react';
import styles from './index.module.css';

// Servies
import { postService } from 'shared/services';

// Components
import ItemList from 'shared/components/ItemList';

function Search({ location }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const postsData = await postService.getPostsByQuery(location.search);
      setPosts(postsData);
      setLoading(false);
    })();
  }, [location]);

  return (
    <main className={styles.search}>
      <h1>Items found</h1>
      <ItemList posts={posts} loading={loading} />
    </main>
  );
}
export default Search;
