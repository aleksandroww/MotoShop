// React and Style
import React, { useContext, useState } from 'react';
import styles from './index.module.css';

// Firebase
import { projectStorage } from 'firebase/config';

// Validations
import { useForm } from 'react-hook-form';

// Router and Routes
import { Redirect } from 'react-router-dom';
import { routes } from 'constants/routes';

// Services
import { postService, fileService } from 'shared/services';

// Context
import { UserContext } from 'App';

// Components
import Button from 'shared/components/Button';
import Loading from 'shared/components/Loading';

function Create() {
  const { handleSubmit, register, errors } = useForm();
  const { user } = useContext(UserContext);

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [description, setDescription] = useState(null);
  const [loading, setLoading] = useState(false);

  // Allowed img types
  const types = ['image/png', 'image/jpeg', 'image/jpg'];

  // Handle image change
  const handleFileChange = (e) => {
    const image = e.target.files[0];

    if (image && types.includes(image.type)) {
      setFile(image);
      setError(null);
    } else if (image) {
      setFile(null);
      setError('Please choose valid file format!');
    } else {
      setFile(null);
      setError('Please choose file!');
    }
  };

  // Handle form submit
  const handleCreate = (data) => {
    setLoading(true);

    if (file) {
      const storageRef = projectStorage.ref(file.name);

      fileService.uploadFile(file).on(
        'state_changed',
        null,
        (err) => {
          setError(err);
        },
        async () => {
          const url = await storageRef.getDownloadURL();

          await postService.createPost({
            ...data,
            url,
            description,
            creator: user.uid,
          });

          setLoading(false);
          window.location = '/';
        }
      );
    } else {
      setLoading(false);
      setError('Please choose file!');
    }
  };

  const selects = [
    {
      name: 'type',
      text: 'Type',
      style: 'type',
      validations: {
        required: 'Should select!',
      },
      options: [
        { value: '', text: 'Select' },
        { value: 'Cross', text: 'Cross' },
        { value: 'Sport', text: 'Sport' },
        { value: 'Naked', text: 'Naked' },
      ],
    },
    {
      name: 'brand',
      text: 'Brand',
      style: 'brand',
      validations: {
        required: 'Should select!',
      },
      options: [
        { value: '', text: 'Select' },
        { value: 'Kawasaki', text: 'Kawasaki' },
        { value: 'Honda', text: 'Honda' },
        { value: 'Aprilia', text: 'Aprilia' },
        { value: 'BMW', text: 'BMW' },
        { value: 'Suzuki', text: 'Suzuki' },
        { value: 'KTM', text: 'KTM' },
      ],
    },
    {
      name: 'engine',
      text: 'Engine Type',
      style: 'engine',
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
      validations: {
        required: 'Should select!',
      },
      options: [
        { value: '', text: 'Select' },
        { value: 'isNew', text: 'New' },
        { value: 'isUsed', text: 'Used' },
      ],
    },
  ];

  // Render Selects
  const renderSelect = (select, i) => (
    <div key={i} className={styles[select.style]}>
      <label htmlFor={select.name}>{select.text}</label>

      <select
        name={select.name}
        id={select.name}
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

  // Render Inputs
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

  // Render Conditions
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

  // If user is not logged redirect to login
  if (!user) {
    return <Redirect to={routes.login} />;
  }

  return (
    <section className={styles.create}>
      <form onSubmit={handleSubmit(handleCreate)}>
        <h1>Sell My Bike</h1>

        <div className={styles['create-inputs']}>
          {selects.map(renderSelect)}

          {inputs.map(renderInput)}

          {selects.map(renderSelect)}

          <div className={styles.condition}>
            {conditions.map(renderConditions)}

            <div>
              <label htmlFor="image">Upload image</label>
              <input type="file" onChange={handleFileChange} />
            </div>
          </div>

          <div className={styles.description}>
            <label htmlFor="additionalInfo">
              More information about your bike
            </label>
            <textarea
              type="text"
              name="additionalInfo"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell more about your bike"
            ></textarea>
          </div>

          <div className={styles.button}>
            <Button>
              {loading ? (
                <Loading height={45} width={45} color="#fff" />
              ) : (
                'Submit'
              )}
            </Button>
          </div>

          <div className={styles['img-error']}>
            <p>{error}</p>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Create;
