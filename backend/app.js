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
  host: 'mysql-server', //ovde staviti naziv mysql servera u mrezi
  user: 'student', 
  password: 'student',
  database: 'university'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to the database.');
  
    const createTableSql = `
      CREATE TABLE IF NOT EXISTS students (
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        student_id VARCHAR(100) NOT NULL
      )
    `;
  
    connection.query(createTableSql, (err, result) => {
      if (err) throw err;
      console.log("Table 'students' is ready.");
    });
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });