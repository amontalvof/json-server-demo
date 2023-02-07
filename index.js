const fetchWithoutToken = require('./src/fetch');

// const url = 'products/1?_embed=reviews';
const url = 'reviews/1?_expand=product';

fetchWithoutToken(url)
    .then((resp) => console.log(resp))
    .catch((error) => console.error(error.message));
