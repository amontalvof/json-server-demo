# Json Server Demo

## Technologies

-   Node.js
-   Json Server

### in package.json add:

```json
"scripts": {
    "serve-json": "json-server --watch db.json --routes routes.json --port 8080"
}
```

### or

```json
"scripts": {
    "serve-json": "json-server --watch data.js --routes routes.json --port 8080"
}
```

#### Remember to run:

```
npm run serve-json
```
