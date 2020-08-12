// React and style
import React, { useEffect, useState, useContext } from 'react';
// import styles from './index.module.css';

// Servies
import { postService } from 'shared/services';

// Context
import { UserContext } from 'App';

function Posts({ location }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(UserContext);
  const [userID, setUserID] = useState('');

  let personalPosts = posts.filter((curr) => curr.creator === userID);

  useEffect(() => {
    (async () => {
      const postsData = await postService.getPersonalPosts(location.search);
      setPosts(postsData);
      setUserID(user.uid);
    })();
  }, [location, user]);

  const deleteHandler = async (e) => {
    console.log(e.target);
    // await postService.deletePost(e);
  };

  return (
    <main>
      {personalPosts.map((post, i) => (
        <div id="features-wrapper" key={i}>
          <div className="container">
            <div className="row">
              <div className="col-4 col-12-medium">
                <section className="box feature">
                  <a href={post.url}>
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
                <button onClick={deleteHandler}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Posts;
