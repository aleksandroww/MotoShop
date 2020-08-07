import React from 'react';
//import styles from './index.module.css';
import { useForm } from 'react-hook-form';

//create must have(check in mobile.bg)... https://www.mobile.bg/pcgi/mobile.cgi
function Create() {
  const { handleSubmit, register, errors } = useForm();
  const handler = (e) => console.log(e);

  return (
    <section>
      <h1>Sell My Bike</h1>
      <form action="" method="" onSubmit={handleSubmit(handler)}>
        <section>
          <p>Please complete the online form!</p>
        </section>

        <section>
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="select" key="select">
              select
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
        </section>

        <section>
          <label htmlFor="brand">Brand</label>
          <select name="brand" id="brand">
            <option value="select" key="select">
              select
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
        </section>

        <section>
          <label htmlFor="condition">Condition</label>
          <select name="condition" id="condition">
            <option value="select" key="select">
              select
            </option>
            <option value="new" key="new">
              New
            </option>
            <option value="used" key="used">
              Used
            </option>
          </select>
        </section>

        <section>
          <label htmlFor="model">Model</label>
          <input
            type="text"
            placeholder="Ninja, CBR ..."
            name="model"
            ref={register({
              required: 'Should not be empty!',
            })}
          />
          {errors.model && errors.model.message}
        </section>

        <section>
          <label htmlFor="firstRegistration">Year</label>
          <input
            type="text"
            name="year"
            ref={register({
              required: 'Should not be empty!',
              pattern: {
                value: /^[2][0][0-1][0-9]$|^[2][0][2][0]/i,
                message: 'Invalid year! Should be between 2000 and 2020!',
              },
            })}
          />
          {errors.year && errors.year.message}
        </section>

        <section>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            ref={register({
              required: 'Should not be empty!',
            })}
          />
          {errors.price && errors.price.message}
        </section>

        <section>
          <label htmlFor="capacity">Cubic capacity (cm³)</label>
          <input
            type="text"
            name="capacity"
            ref={register({
              required: 'Should not be empty!',
              pattern: {
                value: / ^[5-9][0-9]$|^[1-9][0-9][0-9]$|^[1][0-5][0-9][0-9]$/i,
                message: 'Shoud be between 50cc and 1599cc!',
              },
            })}
          />
          {errors.capacity && errors.capacity.message}
        </section>

        <section>
          <label htmlFor="typeEngine">Type of engine</label>
          <select name="type" id="type">
            <option value="select" key="select">
              select
            </option>
            <option value="2" key="2">
              2
            </option>
            <option value="4" key="4">
              4
            </option>
          </select>
          <label htmlFor="stroke">Stroke</label>
        </section>

        <section>
          <label htmlFor="power">Power (hp)</label>
          <input
            type="text"
            name="power"
            ref={register({
              required: 'Should not be empty!',
            })}
          />
          {errors.power && errors.power.message}
        </section>

        <section>
          <label htmlFor="kilometers">Kilometers</label>
          <input
            type="text"
            name="kilometers"
            ref={register({
              required: 'Should not be empty!',
            })}
          />
          {errors.kilometers && errors.kilometers.message}
        </section>

        <section>
          <label htmlFor="contact">Contact Number</label>
          <input
            type="text"
            name="contact"
            ref={register({
              required: 'Should not be empty!',
              pattern: {
                value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/i,
                message: 'Invalid phone number!',
              },
            })}
          />
          {errors.contact && errors.contact.message}
        </section>

        <section>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            ref={register({
              required: 'Should not be empty!',
            })}
          />
          {errors.name && errors.name.message}
        </section>

        <section>
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            ref={register({
              required: 'Should not be empty!',
            })}
          />
          {errors.city && errors.city.message}
        </section>

        <section>
          <label htmlFor="more">More information about your bike</label>
          <textarea placeholder="About any extras on your bike"></textarea>
        </section>

        <section>{/* add photos */}</section>

        <button>Submit</button>
      </form>
    </section>
  );
}

export default Create;
