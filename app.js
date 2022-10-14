const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors())

const data = [
  {
    customerId: 1,
    name: "Customer 1",
    amount: 120,
    transactionDate: "05-01-2019"
  },
  {
    customerId: 1,
    name: "Customer 1",
    amount: 75,
    transactionDate: "05-21-2019"
  },
  {
    customerId: 1,
    name: "Customer 1",
    amount: 94,
    transactionDate: "05-21-2019"
  },
  {
    customerId: 1,
    name: "Customer 1",
    amount: 10,
    transactionDate: "06-01-2019"
  },
  {
    customerId: 1,
    name: "Customer 1",
    amount: 75,
    transactionDate: "06-21-2019"
  },
  {
    customerId: 1,
    name: "Customer 1",
    amount: 200,
    transactionDate: "07-01-2019"
  },
  {
    customerId: 1,
    name: "Customer 1",
    amount: 1,
    transactionDate: "07-04-2019"
  },
  {
    customerId: 1,
    name: "Customer 1",
    amount: 80,
    transactionDate: "07-03-2019"
  },
  {
    customerId: 1,
    name: "Customer 1",
    amount: 224,
    transactionDate: "07-21-2019"
  },
  {
    customerId: 2,
    name: "Customer 2",
    amount: 125,
    transactionDate: "05-01-2019"
  },
  {
    customerId: 2,
    name: "Customer 2",
    amount: 75,
    transactionDate: "05-21-2019"
  },
  {
    customerId: 2,
    name: "Customer 2",
    amount: 10,
    transactionDate: "06-01-2019"
  },
  {
    customerId: 2,
    name: "Customer 2",
    amount: 75,
    transactionDate: "06-21-2019"
  },
  {
    customerId: 2,
    name: "Customer 2",
    amount: 200,
    transactionDate: "07-01-2019"
  },
  {
    customerId: 2,
    name: "Customer 2",
    amount: 224,
    transactionDate: "07-21-2019"
  },
  {
    customerId: 3,
    name: "Customer 3",
    amount: 120,
    transactionDate: "06-21-2019"
  }
];

app.get('/rewards', (req, res) => {
  res.json(data)
})

app.get('/rewards/:customerId', (req, res) => {
  const rewardsByCustomer = data.filter(item => item.customerId == req.params.customerId);
  res.json(rewardsByCustomer);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})