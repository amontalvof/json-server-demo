const fetchWithoutToken = require('./src/fetch');

fetchWithoutToken('products')
    .then((resp) => console.log(resp))
    .catch((error) => console.error(error.message));
