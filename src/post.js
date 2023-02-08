const fetchWithoutToken = require('./fetch');

const url = 'products';

const data = {
    id: 11,
    title: 'Product 11',
    category: 'electronics',
    price: 4000,
    description: 'This is description about product 11',
};

fetchWithoutToken(url, data, 'POST')
    .then((resp) => console.log(resp))
    .catch((error) => console.error(error.message));
