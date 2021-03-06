const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());


const myLife = require('./router/myLifeRouter');



app.use(express.static('server/public'));

const port = process.env.PORT || 5000;
app.listen(port, function(){
  console.log(`Listening on port ${port}.`);
})