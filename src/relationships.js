const fetchWithoutToken = require('./fetch');

// the product with id 1 has 3 reviews
// const url = 'products/1?_embed=reviews';

// the review with id 1 has a product
const url = 'reviews/1?_expand=product';

fetchWithoutToken(url)
    .then((resp) => console.log(resp))
    .catch((error) => console.error(error.message));
