const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

let cart = [];

app.post('/add', (req, res) => {
  const { item } = req.body;
  cart.push(item);
  res.status(201).send({ cart });
});

app.get('/view', (req, res) => res.send({ cart }));

app.delete('/clear', (req, res) => { cart = []; res.send({ cart }); });

app.listen(3001, () => console.log('Cart Service on 3001'));
