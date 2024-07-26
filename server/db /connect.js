
const mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Vishvajeet@123',
  database : 'Registration'
});


connection.connect((err)=>{

        if(err)
            {
                console.log(error ,"error in mysql db connection")
            }
            else {
                console.log("db connected ")
            }
});


module.exports =connection
