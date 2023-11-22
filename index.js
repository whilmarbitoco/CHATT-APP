const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const route = require('./routes/route');

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', route);

app.listen(5000, () => {
  console.log('Server running on PORT 5000');
});
