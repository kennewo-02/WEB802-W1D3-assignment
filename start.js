require('dotenv').config();
require('./models/Registration')
const app = require('./app');
const mongoose = require('mongoose');


const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Express is running on port ${server.address().port}`);
});

// Connect to MongoDB without deprecated options
console.log("DATABASE:", process.env.DATABASE);
mongoose.connect(process.env.DATABASE);

mongoose.connection
  .on('open', () => {
      console.log('Mongoose connection open');
  })
  .on('error', (err) => {
      console.log(`Connection error: ${err.message}`);
  });
