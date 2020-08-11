// React and Style
import React, { useContext, useState } from 'react';
import styles from './index.module.css';

// Validations
import { useForm } from 'react-hook-form';

// Router and Routes
import { Redirect } from 'react-router-dom';
import { routes } from 'constants/routes';

// Services
// import { postService } from 'services';

// Context
import { UserContext } from 'App';

// Components
import Button from 'shared/components/Button';
import ProgressBar from 'shared/components/ProgressBar';

// import useStorage from 'hooks/useStorage';

function Create() {
  const { handleSubmit, register, errors } = useForm();
  const { user } = useContext(UserContext);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState(null);
  const [condition, setCondition] = useState('');
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  const [engine, setEngine] = useState('');

  const types = ['image/png', 'image/jpeg', 'image/jpg'];

  const changeHandler = (e) => {
    setSelected(e.target.files[0]);
  };
  //////////////////////////////////

  const createHandler = (e) => {
    setData(e);

    try {
      if (selected && types.includes(selected.type)) {
        setFile(selected);
        setError('');
      } else {
        setFile(null);
        setError('Please select an image file (png or jpg or jpeg)');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const selects = [
    {
      name: 'type',
      text: 'Type',
      style: 'type',
      handler: (e) => {
        setType(e.target.value);
      },
      validations: {
        required: 'Should select!',
      },
      options: [
        { value: '', text: 'Select' },
        { value: 'cross', text: 'Cross' },
        { value: 'sport', text: 'Sport' },
        { value: 'naked', text: 'Naked' },
      ],
    },
    {
      name: 'brand',
      text: 'Brand',
      style: 'brand',
      handler: (e) => {
        setBrand(e.target.value);
      },
      validations: {
        required: 'Should select!',
      },
      options: [
        { value: '', text: 'Select' },
        { value: 'kawasaki', text: 'Kawasaki' },
        { value: 'honda', text: 'Honda' },
        { value: 'aprilia', text: 'Aprilia' },
        { value: 'bmw', text: 'BMW' },
        { value: 'suzuki', text: 'Suzuki' },
      ],
    },
    {
      name: 'engine',
      text: 'Engine Type',
      style: 'engine',
      handler: (e) => {
        setEngine(e.target.value);
      },
      validations: {
        required: 'Should select!',
      },
      options: [
        { value: '', text: 'Select' },
        { value: '2', text: '2 Stroke' },
        { value: '4', text: '4 Stroke' },
      ],
    },
  ];

  const inputs = [
    {
      name: 'model',
      text: 'Model',
      style: 'model',
      type: 'text',
      validations: {
        required: 'Should not be empty!',
      },
      placeholder: 'Ninja, CBR ...',
    },
    {
      name: 'year',
      text: 'Year',
      style: 'year',
      type: 'text',
      validations: {
        required: 'Should not be empty!',
        pattern: {
          value: /^[2][0][0-1][0-9]$|^[2][0][2][0]/i,
          message: 'Invalid year! Should be between 2000 and 2020!',
        },
      },
    },
    {
      name: 'price',
      text: 'Price',
      style: 'price',
      type: 'text',
      validations: {
        required: 'Should not be empty!',
        pattern: {
          value: /^\d{1,6}$/i,
          message: 'Should be number!',
        },
      },
    },
    {
      name: 'capacity',
      text: 'Capacity (cm³)',
      style: 'capacity',
      type: 'text',
      validations: {
        required: 'Should not be empty!',
        pattern: {
          value: /^[5-9][0-9]$|^[1-9][0-9][0-9]$|^[1][0-5][0-9][0-9]$/i,
          message: 'Should be between 50cc and 1599cc!',
        },
      },
    },
    {
      name: 'power',
      text: 'Power (hp)',
      style: 'power',
      type: 'text',
      validations: {
        required: 'Should not be empty!',
        pattern: {
          value: /^\d{1,6}$/i,
          message: 'Should be number!',
        },
      },
    },
    {
      name: 'kilometers',
      text: 'Kilometers',
      style: 'kilometers',
      type: 'text',
      validations: {
        required: 'Should not be empty!',
        pattern: {
          value: /^\d{0,6}$/i,
          message: 'Should be number!',
        },
      },
    },
    {
      name: 'contact',
      text: 'Contact Number',
      style: 'contact',
      type: 'text',
      validations: {
        required: 'Should not be empty!',
        pattern: {
          value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/i,
          message: 'Invalid phone number!',
        },
      },
    },
    {
      name: 'name',
      text: 'Name',
      style: 'name',
      type: 'text',
      validations: {
        required: 'Should not be empty!',
        pattern: {
          value: /^[a-zA-Z]{0,85}$/i,
          message: 'Should contain only letters!',
        },
      },
    },
    {
      name: 'city',
      text: 'City',
      style: 'city',
      type: 'text',
      validations: {
        required: 'Should not be empty!',
        pattern: {
          value: /^[a-zA-Z]{0,85}$/i,
          message: 'Should contain only letters!',
        },
      },
    },
  ];

  const conditions = [
    {
      name: 'condition',
      text: 'Condition',
      style: 'condition',
      handler: (e) => {
        setCondition(e.target.value);
      },
      validations: {
        required: 'Should select!',
      },
      options: [
        { value: '', text: 'Select' },
        { value: 'new', text: 'New' },
        { value: 'used', text: 'Used' },
      ],
    },
  ];

  const renderSelect = (select, i) => (
    <div key={i} className={styles[select.style]}>
      <label htmlFor={select.name}>{select.text}</label>
      <select
        name={select.name}
        id={select.name}
        onChange={select.handler}
        ref={register(select.validations)}
      >
        {select.options.map((option, y) => (
          <option name={select.name} value={option.value} key={y}>
            {option.text}
          </option>
        ))}
      </select>
      <p className={styles.error}>
        {errors[select.name] && errors[select.name].message}
      </p>
    </div>
  );

  const renderInput = (input, i) => (
    <div className={styles[input.style]} key={i}>
      <label htmlFor={input.name}>{input.text}</label>
      <input
        type={input.type}
        placeholder={input.placeholder ? input.placeholder : ''}
        name={input.name}
        ref={register(input.validations)}
      />
      <p className={styles.error}>
        {errors[input.name] && errors[input.name].message}
      </p>
    </div>
  );

  const renderConditions = (con, i) => (
    <div key={i}>
      <label htmlFor={con.name}>{con.text}</label>
      <select
        name={con.name}
        id={con.name}
        onChange={con.handler}
        ref={register(con.validations)}
      >
        {con.options.map((option, y) => (
          <option name={con.name} value={option.value} key={y}>
            {option.text}
          </option>
        ))}
      </select>
      <p className={styles.error}>
        {errors[con.name] && errors[con.name].message}
      </p>
    </div>
  );

  if (!user) {
    return <Redirect to={routes.login} />;
  }

  return (
    <section className={styles.create}>
      <form onSubmit={handleSubmit(createHandler)}>
        <h1>Sell My Bike</h1>

        <div key="condition" className={styles['create-inputs']}>
          {inputs.map(renderInput)}
          {selects.map(renderSelect)}
          {/*  */}
          <div className={styles.condition}>
            {conditions.map(renderConditions)}
            <div>
              <label htmlFor="image">Upload image</label>
              <input type="file" name="image" onChange={changeHandler} />
              <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && (
                  <ProgressBar
                    file={file}
                    setFile={setFile}
                    data={data}
                    condition={condition}
                    brand={brand}
                    type={type}
                    engine={engine}
                  />
                )}
              </div>
            </div>
          </div>

          <div className={styles.description} key="s">
            <label htmlFor="additionalInfo">
              More information about your bike
            </label>
            <textarea
              type="text"
              placeholder="About any extras on your bike"
              name="additionalInfo"
            ></textarea>
          </div>

          <div className={styles.button}>
            <Button>Submit</Button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Create;
