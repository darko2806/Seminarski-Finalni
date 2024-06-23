const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());

// MySQL connection setup
const connection = mysql.createConnection({
  host: 'baza-db', //ovde staviti naziv mysql servera u mrezi
  user: 'student', 
  password: 'student',
  database: 'university'
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
