// React and style
import React, { useEffect, useState, useContext } from 'react';
import styles from './index.module.css';

// Services
import { bikeService } from 'shared/services';

// Context
import { UserContext } from 'App';

// Screens
import NotFound from 'screens/NotFound';

// Components
import Loading from 'shared/components/Loading';

function Bike({ match: { params } }) {
  const [bike, setBike] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      const fetchedBike = await bikeService.getBike(params.id);
      setBike(fetchedBike);
      setLoading(false);
    })();
  }, [params]);

  const deleteBike = async () => {
    try {
      await bikeService.deleteBike(user.uid, params.id);
      window.location = '/';
    } catch (e) {
      console.log(e);
    }
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <Loading width={50} height={50} color="#214c78" />
      </div>
    );
  }

  if (!bike) {
    return <NotFound />;
  }

  const options = [
    { icon: 'fas fa-calendar', value: bike.year },
    { icon: 'fas fa-gas-pump', value: `${bike.kilometers} km` },
    { icon: 'fas fa-tachometer-alt', value: `${bike.power} hp` },
    { icon: 'fas fa-palette', value: `${bike.engine} stroke` },
    { icon: 'fas fa-car-battery', value: `${bike.capacity} cp` },
  ];

  const contacts = [
    { icon: 'fas fa-user', value: bike.name },
    { icon: 'fas fa-map-market-alt', value: bike.city },
    { icon: 'fas fa-phone', value: bike.contact },
  ];

  return (
    <main className={styles.bike}>
      <div className={styles['img-container']}>
        <a href={bike.url}>
          <img src={bike.url} alt="moto" />
        </a>
      </div>

      <section className={styles.description}>
        <h2>{`${bike.brand} ${bike.model}`}</h2>

        <hr />

        <div className={styles.row}>
          <p>{`${bike.type}, ${bike.condition}`}</p>
          <p className={styles.price}>{bike.price} $</p>
        </div>

        <div className={styles['main-info']}>
          {options.map((option, i) => (
            <p key={i}>
              <i className={option.icon} />
              {option.value}
            </p>
          ))}
        </div>

        {bike.description && (
          <section className={styles['description-header']}>
            <h3>Description</h3>

            <hr />

            <div className={styles['bike-description']}>
              <p>{bike.description}</p>
            </div>
          </section>
        )}

        <div className={styles.contact}>
          <div>
            {contacts.map((contact, i) => (
              <p key={i}>
                <i className={contact.icon} />
                {contact.value}
              </p>
            ))}
          </div>
          {user && (
            <div>
              {bike.creator === user.uid && (
                <button
                  className={styles['delete-btn']}
                  onClick={() => deleteBike()}
                >
                  Delete
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Bike;
