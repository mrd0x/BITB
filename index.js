const express = require('express');
var useragent = require('useragent');

const app = express();


// Create MiddleWare Fuction That Checks User Agent

app.use('/', (req, res, next) => {

  ua = useragent.is(req.headers['user-agent'])// true
  if (ua.chrome)
  {
    app.use(express.static('public/Windows-Chrome-LightMode'));
  }
    next();
  });

app.get('/', (req, res) => {
  
  
  res.send('Successful response.');
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));