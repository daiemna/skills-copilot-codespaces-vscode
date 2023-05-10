// Ceate web server

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const uuid = require('uuid/v4');
const fs = require('fs');
const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cors());

const comments = require('./comments.json');

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  const comment = {
    id: uuid(),
    timestamp: Date.now(),
    body: req.body.body
  };
  });