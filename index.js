'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('welcome to my website ');
});
app.get('/next', function (req, res) {
  res.send('{ "response": "yes this is the next page,please register your account"}');
});
app.get('/ok', function (req, res) {
  res.send('{ "response": " Nice Job!, cool job and welldone!" }');
});

app.listen(PORT, HOST);
console.log(`Server Running on http://${HOST}:${PORT}`);