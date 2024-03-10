const getProducts = () => [
    {
      id: '1',
      name: 'Computer',
      price: 70000,
      quantity: 20,
    },
    {
      id: '2',
      name: 'Keyboard',
      price: 5000,
      quantity: 40,
    },
    {
        id: '2',
        name: 'Mouse',
        price: 2000,
        quantity: 90,
      },
  ];

  const ProductServices = { getProducts };

  module.exports = ProductServices; 