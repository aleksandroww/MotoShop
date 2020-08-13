// React and style
import React from 'react';
import styles from './index.module.css';

// Components
import Item from 'shared/components/Item';
import Loading from 'shared/components/Loading';

function ItemList({ posts, loading }) {
  if (loading) {
    return (
      <div className={styles.loading}>
        <Loading color='#214c78' width={50} height={50} />
      </div>
    );
  }

  return (
    <ul className={styles['item-list']}>
      {posts.map((post, i) => (
        <Item {...post} key={i} />
      ))}
    </ul>
  );
}

export default ItemList;
