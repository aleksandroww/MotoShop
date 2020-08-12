// React and style
import React, { useEffect, useState } from 'react';
import styles from './index.module.css';

// Servies
import { postService } from 'shared/services';

function Search({ location }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const postsData = await postService.getPostsByQuery(location.search);
      setPosts(postsData);
    })();
  }, [location]);

  return (
    <main>
      {posts.map((post, i) => (
        <h2 key={i}>{post.brand}</h2>
      ))}
    </main>
  );
}

export default Search;
