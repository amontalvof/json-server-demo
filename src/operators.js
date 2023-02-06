const fetchWithoutToken = require('./fetch');

// gte = greater than or equal to
// lte = less than or equal to
// const url = 'products?price_gte=2000&price_lte=6000';

// ne = not equal to
// const url = 'products?id_ne=1';

// like = let you use regex to search
const url = 'products?category_like=^f';

fetchWithoutToken(url)
    .then((resp) => console.log(resp))
    .catch((error) => console.error(error.message));
