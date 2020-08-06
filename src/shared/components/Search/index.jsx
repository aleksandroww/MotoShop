// React and style
import React from 'react';
import styles from './index.module.css';

function Search() {
  return (
    <section className={styles.search}>
      <h1>Search</h1>
      <form>
        <div className={styles.row}>
          <section>
            <label htmlFor='type'>Type</label>
            <select name='type' id='type'>
              <option value='all' key='all'>
                All
              </option>
              <option value='offRoad' key='offRoad'>
                Off-road
              </option>
              <option value='enduro' key='enduro'>
                Enduro
              </option>
              <option value='sportTouring' key='sportTouring'>
                Sport Touring
              </option>
              <option value='touring' key='touring'>
                Touring
              </option>
              <option value='cruiser' key='cruiser'>
                Cruiser
              </option>
              <option value='naked' key='naked'>
                Naked
              </option>
              <option value='sportBike' key='sportBike'>
                Sport bike
              </option>
            </select>
          </section>

          <section>
            <label htmlFor='brand'>Brand</label>
            <select name='brand' id='brand'>
              <option value='all' key='all'>
                All
              </option>
              <option value='bmw' key='bmw'>
                BMW
              </option>
              <option value='aprilia' key='aprilia'>
                Aprilia
              </option>
              <option value='ducati' key='ducati'>
                Ducati
              </option>
              <option value='honda' key='honda'>
                Honda
              </option>
              <option value='kawasaki' key='kawasaki'>
                Kawasaki
              </option>
              <option value='suzuki' key='suzuki'>
                Suzuki
              </option>
              <option value='yamaha' key='yamaha'>
                Yamaha
              </option>
              <option value='ktm' key='ktm'>
                KTM
              </option>
            </select>
          </section>
        </div>

        <section>
          <label htmlFor='model'>Model</label>
          <input type='text' placeholder='Ninja, CBR ...' name='model' />
        </section>

        <section>
          <label htmlFor='firstRegistration'>Year</label>
          <div className={styles.row}>
            <input type='text' placeholder='from' name='yearFrom' />
            <input type='text' placeholder='to' name='yearTo' />
          </div>
        </section>

        <section>
          <label htmlFor='price'>Price</label>
          <div className={styles.row}>
            <input type='text' placeholder='from' name='priceFrom' />
            <input type='text' placeholder='to' name='priceTo' />
          </div>
        </section>

        <section>
          <label htmlFor='cc'>Cubic capacity (cm³)</label>
          <div className={styles.row}>
            <input type='text' placeholder='from' name='cubicFrom' />
            <input type='text' placeholder='to' name='cubicTo' />
          </div>
        </section>

        <section>
          <label htmlFor='power'>Power (hp)</label>
          <div className={styles.row}>
            <input type='text' placeholder='from' name='powerFrom' />
            <input type='text' placeholder='to' name='powerTo' />
          </div>
        </section>

        <section>
          <label htmlFor='condition'>Condition</label>
          <div className={styles.row}>
            <input type='checkbox' id='used' name='used' />
            <label htmlFor='used'>Used</label>
            <input type='checkbox' id='new' name='new' />
            <label htmlFor='new'>New</label>
          </div>
        </section>

        <button>Submit</button>
      </form>
    </section>
  );
}

export default Search;
