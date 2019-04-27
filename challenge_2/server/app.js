const express = require('express');
const app = express();


app.use(express.json({urlEncoded: true}))
app.use(express.static('dist'));





module.exports = app;