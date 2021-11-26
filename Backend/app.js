const express = require('express');
const morgan = require('morgan');

const app = express();




// MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); 
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});



module.exports = app;
