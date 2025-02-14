const mysql=require('mysql2');
const config=require('./config.json');

const dbConnection=mysql.createConnection(config.development);

dbConnection.connect(function(err){
    if(err)throw err;
    console.log("Database Connected");
});

module.exports=dbConnection;