// React and style
import React, { useEffect, useState } from 'react';
// import styles from './index.module.css';

// Servies
import { postService } from 'shared/services';

function Search({ location }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const postsData = await postService.getPostsByQuery(location.search);
      setPosts(postsData);
    })();
  }, [location]);

  return (
    <main>
      {posts.map((post, i) => (
        <div id="features-wrapper" key={i}>
          <div className="container">
            <div className="row">
              <div className="col-4 col-12-medium">
                <section className="box feature">
                  <a href={post.url} className="image featured">
                    <img src={post.url} alt="" width="500" height="300" />
                  </a>
                  <div className="inner">
                    <header>
                      <h2 key={i}>
                        {post.brand} {post.model}
                      </h2>
                      <p>{post.price} $</p>
                    </header>
                    <p></p>
                    <p>{post.year}</p>
                    <p>{post.capacity} cc</p>
                    <p>{post.power} hp</p>
                    <p>{post.name}</p>
                    <p>{post.city}</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
export default Search;
