const express = require('express');

const app = express();

// Create MiddleWare Fuction That Checks User Agent

app.use('/request-type', (req, res, next) => {
    console.log('Request type: ', req.method);
    next();
  });

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));