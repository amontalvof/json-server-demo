const fetchWithoutToken = require('./src/fetch');

const url = 'products?q=in';

fetchWithoutToken(url)
    .then((resp) => console.log(resp))
    .catch((error) => console.error(error.message));
