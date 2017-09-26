//  Set-up MySQL connection
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sector9',
  database: 'burgers_db'
});

// Make connection
connection.connect(function(error) {
  if (error) {
    console.error('error connecting: ' + error.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Export connection for ORM to use
module.exports = connection;