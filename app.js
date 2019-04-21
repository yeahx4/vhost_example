const express = require('express');
const vhost = require('vhost');

const domain1 = require('../domain1/app');
const domain2 = require('../domain2/app');

const app = express();

app.use(vhost('www.example.com', domain1));
app.use(vhost('www.example2.com', domain2));

app.use(express.static('static'));

app.use((req, res) => {
    res.status(404).send('Page Not Found!')
});

app.listen(3000, () => {
    console.log('HostManager listening on port 3000');
});

module.exports = app;