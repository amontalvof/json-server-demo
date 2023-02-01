const fetchWithoutToken = require('./fetch');

const url = 'products?_sort=price,category&_order=desc,asc';

fetchWithoutToken(url)
    .then((resp) => console.log(resp))
    .catch((error) => console.error(error.message));
