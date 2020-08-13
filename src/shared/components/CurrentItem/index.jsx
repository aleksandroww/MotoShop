// React and style
import React from 'react';
import styles from './index.module.css';

//Post services
import { postService } from 'shared/services';

function Item({
  brand,
  model,
  year,
  power,
  capacity,
  url,
  price,
  city,
  condition,
  contact,
  engine,
  kilometers,
  name,
  type,
  description,
  postID,
}) {

  // async function deleteHandler(id) {
  //   await postService.deletePost(id);
  //   window.location.reload(false);
  // }

  return (
    <li className={styles.item}>
      <div className={styles['img-container']}>
        <a href={url}>
          <img src={url} alt={model} />
        </a>
      </div>
      <div className={styles.description}>
        <p className={styles.name}>
          {brand} {model}
        </p>
        <p>Capacity: {capacity} cp</p>
        <p>Power: {power} hp</p>
        <p>Year: {year}</p>
        <p>City: {city} </p>
        <p>Condition: {condition} </p>
        <p>Contact Number: {contact}</p>
        <p>Engine: {engine} Stroke</p>
        <p>Kilometers: {kilometers} km</p>
        <p>Name: {name}</p>
        <p>Type: {type} cp</p>
        <p>Description: {description} hp</p>
        <p className={styles.price}>{price} $</p>
      </div>
      <button onClick={deleteHandler(postID)}>
        <img src="" alt="delete" />
      </button>
    </li>
  );
}

export default Item;
