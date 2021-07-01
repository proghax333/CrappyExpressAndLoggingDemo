
const express = require('express');
const process = require('process');
const cors = require('cors');

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to home page!</h1>
  `);
});

app.get('/login', (req, res) => {
  res.send("This is the login page");
});

const users = [
  { id: 1, name: "Jack Bacon" },
  { id: 2, name: "Jane Doe" },
];

app.get('/api/users', (req, res) => {
  res.type('json').send(JSON.stringify(users));
});

const batteryLogs = {

};

app.get('/api/sendBattery', (req, res) => {
  const ipAddress = req.socket.remoteAddress;

  batteryLogs[ipAddress] = req.query.percent;
  res.send('Battery percentage was logged');
})

app.get('/api/getAllBatteryInfo', (req, res) => {
  res.type('json').send(JSON.stringify(batteryLogs));
})

app.listen(port, () => {
  console.log(`Server has been started on port: ${port}`);
});
