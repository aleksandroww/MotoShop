const motoInfo = {
  selectSections: [
    {
      name: 'type',
      text: 'Type',
      options: [
        { value: 'all', text: 'All' },
        { value: 'Sport', text: 'Sport' },
        { value: 'Off-road', text: 'Off-road' },
        { value: 'Naked', text: 'Naked' },
        { value: 'Cruiser', text: 'Cruiser' },
        { value: 'Touring', text: 'Touring' },
        { value: 'Dual-sport', text: 'Dual-sport' },
      ],
    },
    {
      name: 'brand',
      text: 'Brand',
      options: [
        { value: 'all', text: 'All' },
        { value: 'BMW', text: 'BMW' },
        { value: 'Honda', text: 'Honda' },
        { value: 'Kawasaki', text: 'Kawasaki' },
        { value: 'Suzuki', text: 'Suzuki' },
        { value: 'Yamaha', text: 'Yamaha' },
        { value: 'Aprilia', text: 'Aprilia' },
        { value: 'Ducati', text: 'Ducati' },
        { value: 'Triumph', text: 'Triumph' },
        { value: 'KTM', text: 'KTM' },
        { value: 'Husqvarna', text: 'Husqvarna' },
      ],
    },
  ],

  inputSections: [
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
  ],

  selects: [
    {
      name: 'type',
      text: 'Type',
      style: 'type',
      validations: {
        required: 'Should select!',
      },
      options: [
        { value: '', text: 'Select' },
        { value: 'Sport', text: 'Sport' },
        { value: 'Off-road', text: 'Off-road' },
        { value: 'Naked', text: 'Naked' },
        { value: 'Cruiser', text: 'Cruiser' },
        { value: 'Touring', text: 'Touring' },
        { value: 'Dual-sport', text: 'Dual-sport' },
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
        { value: 'BMW', text: 'BMW' },
        { value: 'Honda', text: 'Honda' },
        { value: 'Kawasaki', text: 'Kawasaki' },
        { value: 'Suzuki', text: 'Suzuki' },
        { value: 'Yamaha', text: 'Yamaha' },
        { value: 'Aprilia', text: 'Aprilia' },
        { value: 'Ducati', text: 'Ducati' },
        { value: 'Triumph', text: 'Triumph' },
        { value: 'KTM', text: 'KTM' },
        { value: 'Husqvarna', text: 'Husqvarna' },
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
  ],

  inputs: [
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
  ],

  conditions: [
    {
      name: 'condition',
      text: 'Condition',
      style: 'condition',
      validations: {
        required: 'Should select!',
      },
      options: [
        { value: '', text: 'Select' },
        { value: 'new', text: 'New' },
        { value: 'used', text: 'Used' },
      ],
    },
  ],

  types: ['image/png', 'image/jpeg', 'image/jpg'],
};

export default motoInfo;
