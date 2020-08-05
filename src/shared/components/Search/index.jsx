// React and style
import React, { useState } from 'react';
import styles from './index.module.css';

function Search() {
  return (

    
    <section className={styles.search}>
      <h2>Search</h2>
      <form action="/" method="POST">
        <label htmlFor="types">Types</label>
        <select>
          <option value="all" key="all">
            All
          </option>
          <option value="offRoad" key="offRoad">
            Off-road
          </option>
          <option value="enduro" key="enduro">
            Enduro
          </option>
          <option value="sportTouring" key="sportTouring">
            Sport Touring
          </option>
          <option value="touring" key="touring">
            Touring
          </option>
          <option value="cruiser" key="cruiser">
            Cruiser
          </option>
          <option value="naked" key="naked">
            Naked
          </option>
          <option value="sportBike" key="sportBike">
            Sport bike
          </option>
        </select>
        <br />
        <label htmlFor="brand">Brand</label>
        <select>
          <option value="all" key="all">
            All
          </option>
          <option value="bmw" key="bmw">
            BMW
          </option>
          <option value="aprilia" key="aprilia">
            Aprilia
          </option>
          <option value="ducati" key="ducati">
            Ducati
          </option>
          <option value="honda" key="honda">
            Honda
          </option>
          <option value="kawasaki" key="kawasaki">
            Kawasaki
          </option>
          <option value="suzuki" key="suzuki">
            Suzuki
          </option>
          <option value="yamaha" key="yamaha">
            Yamaha
          </option>
          <option value="ktm" key="ktm">
            KTM
          </option>
        </select>
        <br />
        <label htmlFor="model">Model</label>
        <input type="text" />
        <br />
        <label htmlFor="firstRegistration">First registration</label>
        <input type="text" placeholder="from" />
        <input type="text" placeholder="to" />
        <br />
        <label htmlFor="price">Price</label>
        <input type="text" placeholder="from" />
        <input type="text" placeholder="to" />
        <br />
        <label htmlFor="cc">Cubic capacity (in cm³)</label>
        <input type="text" placeholder="from" />
        <input type="text" placeholder="to" />
        <br />
        <label htmlFor="power">Power</label>
        <input type="text" placeholder="hp" />
        <input type="text" placeholder="hp" />
        <br />
        <label htmlFor="condition">Condition</label>
        <br />
        <input type="checkbox" value="used" />
        {'Used '}
        <br />
        <input type="checkbox" value="new" />
        {'New '}
        <br />
        <button>Submit</button>
      </form>
    </section>
  );
}

export default Search;
