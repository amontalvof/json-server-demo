const fetchWithoutToken = require('./fetch');

const url = 'products?category=electronics&discount.type=shipping';

fetchWithoutToken(url)
    .then((resp) => console.log(resp))
    .catch((error) => console.error(error.message));
