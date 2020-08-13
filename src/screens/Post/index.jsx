// React and style
import React, { useEffect, useState } from 'react';
import style from './index.module.css';

//components
import CurrentItem from 'shared/components/CurrentItem';

//services
import { postService } from 'shared/services';

function Post({ match: { params } }) {
  const [post, setPost] = useState(null);
  const postID = params.id;

  useEffect(() => {
    (async () => {
      const currPost = await postService.getPost(postID);
      setPost(currPost);
    })();
  }, [postID]);

  return (
    <ul className={style.item}>
      <CurrentItem {...post} postID={postID} />
    </ul>
  );
}

export default Post;
