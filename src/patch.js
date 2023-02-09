const fetchWithoutToken = require('./src/fetch');

const url = 'products/11';

const data = {
    price: 8000,
};

fetchWithoutToken(url, data, 'PATCH')
    .then((resp) => console.log(resp))
    .catch((error) => console.error(error.message));
