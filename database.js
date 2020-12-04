var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: '',
    database : 'dbmanager',
});
var connect = function (){
    connection.connect(function (err){
        if (!err){
            console.log("Database is connected!!!");
        }else {
            console.log("Database connect error");
        }
    })
}
var closeDB = function () {
    connection.end(function (err){
        if (!err) console.log("closed db");
    })
}

exports.getALLUser = function(callbackQuery) {
    connect();
    connection.query("select * from user", function (err,results,fields){
        if (!err) {
            callbackQuery(results);
        }else{
            console.log(err);
        }
    })
}