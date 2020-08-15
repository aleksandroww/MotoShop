// React and Style
import React, { useContext, useState } from 'react';
import styles from './index.module.css';

// Firebase
import { projectStorage } from 'firebase/config';

// Validations
import { useForm } from 'react-hook-form';

// Router and Routes
import { Redirect } from 'react-router-dom';
import { routes } from 'shared/constants/routes';

// Services
import { bikeService, fileService } from 'shared/services';

// Context
import { UserContext } from 'App';

// Components
import Button from 'shared/components/Button';
import Loading from 'shared/components/Loading';

//Import image types and motorcycle Info
import info from 'MotoInfoConstans';

function Create() {
  const { handleSubmit, register, errors } = useForm();
  const { user } = useContext(UserContext);

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [description, setDescription] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle image change
  const handleFileChange = (e) => {
    const image = e.target.files[0];

    if (image && info.types.includes(image.type)) {
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

          await bikeService.createBike({
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
          {info.selects.map(renderSelect)}

          {info.inputs.map(renderInput)}

          <div className={styles.condition}>
            {info.conditions.map(renderConditions)}

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
