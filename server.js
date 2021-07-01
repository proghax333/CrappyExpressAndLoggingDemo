
const express = require('express');
const process = require('process');

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to home page!</h1>
  `);
});

app.get('/login', (req, res) => {
  res.send("This is the login page");
});

app.listen(port, () => {
  console.log(`Server has been started on port: ${port}`);
});
