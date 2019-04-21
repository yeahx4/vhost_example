const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res, next) => {
    res.send('Domain1 Server is on!');
});

http.createServer(app).listen(4020, () => {
    console.log('domain1 server listening on port 4020');
});

module.exports = app;