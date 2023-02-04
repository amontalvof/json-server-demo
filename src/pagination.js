const fetchWithoutToken = require('./fetch');

const url = 'products?_page=2&_limit=2';

fetchWithoutToken(url)
    .then((resp) => console.log(resp))
    .catch((error) => console.error(error.message));
