// React and Style
<<<<<<< HEAD
import React, { useContext } from 'react';
=======
import React from 'react';
>>>>>>> 707e4cf04287042bb4521bff7be322795b7f62c4
import styles from './index.module.css';

// Validations
import { useForm } from 'react-hook-form';

<<<<<<< HEAD
// Router and Routes
import { Redirect } from 'react-router-dom';
import { routes } from 'constants/routes';

// Context
import { UserContext } from 'App';

=======
>>>>>>> 707e4cf04287042bb4521bff7be322795b7f62c4
// Components
import Button from 'shared/components/Button';

function Create() {
  const { handleSubmit, register, errors } = useForm();
<<<<<<< HEAD
  const { user } = useContext(UserContext);
=======
>>>>>>> 707e4cf04287042bb4521bff7be322795b7f62c4

  const handler = (e) => console.log(e);

  const selects = [
    {
      name: 'type',
      text: 'Type',
      style: 'type',
      options: [
        { value: 'select', text: 'Select' },
        { value: 'cross', text: 'Cross' },
        { value: 'sport', text: 'Sport' },
        { value: 'naked', text: 'Naked' },
      ],
    },
    {
      name: 'brand',
      text: 'Brand',
      style: 'brand',
      options: [
        { value: 'select', text: 'Select' },
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
      options: [
        { value: 'select', text: 'Select' },
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

  const renderSelect = (select, i) => (
    <div key={i} className={styles[select.style]}>
      <label htmlFor={select.name}>{select.text}</label>
      <select name={select.name} id={select.name}>
        {select.options.map((option, y) => (
          <option name={select.name} value={option.value} key={y}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );

  const renderInput = (input, i) => (
    <div className={styles[input.style]} key={i}>
      <label htmlFor={input.name}>{input.text}</label>
      <input
        type={input.text}
        placeholder={input.placeholder ? input.placeholder : ''}
        name={input.name}
        ref={register(input.validations)}
      />
<<<<<<< HEAD
      <p className={styles.error}>
        {errors[input.name] && errors[input.name].message}
      </p>
    </div>
  );

  if (!user) {
    return <Redirect to={routes.login} />;
  }

  return (
    <section className={styles.create}>
      <form onSubmit={handleSubmit(handler)}>
=======
      {errors[input.name] && errors[input.name].message}
    </div>
  );

  return (
    <section className={styles.create}>
      <form>
>>>>>>> 707e4cf04287042bb4521bff7be322795b7f62c4
        <h1>Sell My Bike</h1>

        <div className={styles['create-inputs']}>
          {selects.map(renderSelect)}
          {inputs.map(renderInput)}

          <div className={styles.condition}>
            <label htmlFor='condition'>Condition</label>
            <select name='condition' id='condition'>
              <option value='select' key='select'>
                select
              </option>
              <option value='new' key='new'>
                New
              </option>
              <option value='used' key='used'>
                Used
              </option>
            </select>

            <div>
              <label htmlFor=''>Upload image</label>
              <input type='file' name='image' />
            </div>
          </div>

          <div className={styles.description}>
            <label htmlFor='more'>More information about your bike</label>
            <textarea
              placeholder='About any extras on your bike'
              name='additionalInfo'></textarea>
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
