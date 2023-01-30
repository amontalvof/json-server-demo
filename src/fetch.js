const fetch = require('node-fetch');

const baseUrl = 'http://localhost:3000';

const fetchWithoutToken = async (endpoint, data, method = 'GET') => {
    const url = `${baseUrl}/${endpoint}`;

    if (method === 'GET') {
        const resp = await fetch(url);
        return await resp.json();
    } else {
        const resp = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        return await resp.json();
    }
};

module.exports = fetchWithoutToken;
