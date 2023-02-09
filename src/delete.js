const fetchWithoutToken = require('./src/fetch');

const url = 'products/11';

const data = {};

fetchWithoutToken(url, data, 'DELETE')
    .then((resp) => console.log(resp))
    .catch((error) => console.error(error.message));
