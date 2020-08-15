// React and style
import React from 'react';
import styles from './index.module.css';

// Components
import Button from 'shared/components/Button';

//Import Motorcycle Info
import info from 'MotoInfoConstans';

export default function SearchForm() {
  return (
    <section className={styles.search}>
      <h1>Search</h1>

      <form action="/search">
        <div className={styles.row}>
          {info.selectSections.map((select, i) => (
            <section key={i}>
              <label htmlFor={select.name}>{select.text}</label>
              <select name={select.name} id={select.name}>
                {select.options.map((option, y) => (
                  <option value={option.value} key={y}>
                    {option.text}
                  </option>
                ))}
              </select>
            </section>
          ))}
        </div>

        {info.inputSections.map((section, i) => (
          <section key={i}>
            <label>{section.text}</label>
            <div className={styles.row}>
              {section.inputs.map((input, y) => (
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  name={input.name}
                  key={y}
                />
              ))}
            </div>
          </section>
        ))}

        <section>
          <label>Condition</label>
          <div className={`${styles.row} ${styles.condition}`}>
            <input type="checkbox" id="isUsed" name="isUsed" />
            <label htmlFor="isUsed">Used</label>
            <input type="checkbox" id="isNew" name="isNew" />
            <label htmlFor="isNew">New</label>
          </div>
        </section>

        <div className={styles.button}>
          <Button>Search</Button>
        </div>
      </form>
    </section>
  );
}
