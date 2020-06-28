const express = require('express');
const path = require('path')
const app = express();

app.get('/hey', (req, res) => res.send('ho!'))

app.listen(8080)