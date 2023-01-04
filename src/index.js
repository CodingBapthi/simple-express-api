const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();

// Cors middleware to allow cross-origin requests
// When you limit the domains that are allowed to access your API, you can use the cors middleware to allow cross-origin requests.
// app.use(cors({ origin: ['http://example.com', 'http://my-app.com'] }));
app.use(cors());

// Port variable
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
