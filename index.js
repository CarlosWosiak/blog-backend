var express = require('express')
var app = express()
require('dotenv').config({path: __dirname + '/.env'})


const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
