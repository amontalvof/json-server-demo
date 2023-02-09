const fetchWithoutToken = require('./fetch');

const url = 'products/11';

const data = {
    id: 11,
    title: 'Product 11',
    category: 'furniture',
    price: 4000,
    description: 'This is description about product 11',
};

fetchWithoutToken(url, data, 'PUT')
    .then((resp) => console.log(resp))
    .catch((error) => console.error(error.message));
