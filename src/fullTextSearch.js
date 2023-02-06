const fetchWithoutToken = require('./fetch');

// q search query
const url = 'products?q=in';

fetchWithoutToken(url)
    .then((resp) => console.log(resp))
    .catch((error) => console.error(error.message));
