// React and style
import React from 'react';
import styles from './index.module.css';

// Components
import Button from 'shared/components/Button';

function SearchForm() {
  const selectSections = [
    {
      name: 'type',
      text: 'Type',
      options: [
        { value: 'all', text: 'All' },
        { value: 'Cross', text: 'Cross' },
        { value: 'Sport', text: 'Sport' },
        { value: 'Naked', text: 'Naked' },
      ],
    },
    {
      name: 'brand',
      text: 'Brand',
      options: [
        { value: 'all', text: 'All' },
        { value: 'Kawasaki', text: 'Kawasaki' },
        { value: 'Honda', text: 'Honda' },
        { value: 'Aprilia', text: 'Aprilia' },
        { value: 'BMW', text: 'BMW' },
        { value: 'Suzuki', text: 'Suzuki' },
        { value: 'KTM', text: 'KTM' },
      ],
    },
  ];

  const inputSections = [
    {
      text: 'Model',
      inputs: [{ type: 'text', placeholder: 'Ninja, CBR ...', name: 'model' }],
    },
    {
      text: 'Year',
      inputs: [
        { type: 'text', placeholder: 'from', name: 'yearFrom' },
        { type: 'text', placeholder: 'to', name: 'yearTo' },
      ],
    },
    {
      text: 'Price',
      inputs: [
        { type: 'text', placeholder: 'from', name: 'priceFrom' },
        { type: 'text', placeholder: 'to', name: 'priceTo' },
      ],
    },
    {
      text: 'Capacity (cm³)',
      inputs: [
        { type: 'text', placeholder: 'from', name: 'capacityFrom' },
        { type: 'text', placeholder: 'to', name: 'capacityTo' },
      ],
    },
    {
      text: 'Power (hp)',
      inputs: [
        { type: 'text', placeholder: 'from', name: 'powerFrom' },
        { type: 'text', placeholder: 'to', name: 'powerTo' },
      ],
    },
  ];

  return (
    <section className={styles.search}>
      <h1>Search</h1>

      <form action="/search">
        <div className={styles.row}>
          {selectSections.map((select, i) => (
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

        {inputSections.map((section, i) => (
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

export default SearchForm;
