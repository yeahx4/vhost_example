const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res, next) => {
    res.send('Domain2 Server is on!');
});

http.createServer(app).listen(4030, () => {
    console.log('domain2 server listening on port 4030');
});

module.exports = app;