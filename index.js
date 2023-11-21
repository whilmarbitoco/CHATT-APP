const express = require('express');
const app = express();
const route = require('./routes/route');

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.use('/', route);

app.listen(5000, () => {
  console.log('Server running on PORT 5000');
});
