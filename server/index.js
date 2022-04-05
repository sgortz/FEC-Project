var router = require('./routes.js');
const express = require ('express');
const path = require("path");

const app = express();

//middleware
app.use(express.json());
app.use(express.static('client/dist'));
app.use(express.urlencoded({extended: true}));

const PORT = 3000 || process.env.PORT;

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})