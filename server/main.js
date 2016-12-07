var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('asdasasdasd');
});

app.listen(3000);
