const express = require('express');
const app = express();

require('dotenv').config();

// Port variable
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
