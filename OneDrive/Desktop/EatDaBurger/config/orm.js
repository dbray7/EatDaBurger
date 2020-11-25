// Import Node Dependencies
var connection = require('./connection.js');


// Methods for MySQL commands
var orm = {

  // selectAll()
  selectAll: function (callback) {

    // Run MySQL Query
    connection.query('SELECT * FROM burgers', function (err, result) {
      if (err) throw err;
      callback(result);
    });

  },

  // insertOne()
  insertOne: function (burger_name, callback) {
    connection.query('INSERT INTO burgers SET ?', {
      burger_name: burger_name,
      devoured: false
    }, function (err, result) {
      if (err) throw err;
      callback(result);
    });

  },

  // updateOne()
  updateOne: function (burgerID, callback) {

    // Run MySQL Query
    connection.query('UPDATE burgers SET ? WHERE ?', [{ devoured: true }, { id: burgerID }], function (err, result) {
      if (err) throw err;
      callback(result);
    });

  }

};

// Export the ORM object in module.exports.
module.exports = orm;