const mysql = require('mysql');

// connection for production

// let config = {
//     user: process.env.SQL_USER,
//     database: process.env.SQL_DATABASE,
//     password: process.env.SQL_PASSWORD,
// }

// if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
//   config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
// }

// let connection = mysql.createConnection(config);

// connection for development

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS
  });
  
    connection.connect(function(err) {
      if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
      }
      console.log('Connected as thread id: ' + connection.threadId);
    });
  
    module.exports = connection;