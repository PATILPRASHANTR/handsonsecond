const express = require('express');
const app = express(); //creating instance

const jsonData = require("./data")



app.get("/getUser",function(req,res){
    console.log(jsonData.student.fun())
    res.json(jsonData.student)
})

//home route
app.get("/",function(req,res){
    res.json(jsonData)
})

app.listen(3002);



// we can also export individual data
// app.get("/getUsers1", function (req, res) {
//     res.json(jsonData.users.json1);
//   });
  
//   app.get("/getUsers2", function (req, res) {
//     res.json(jsonData.users.json2);
//   });




// app.get("/",function(req, res){
//     // we can only use one res.send for a single request
//     res.send("Hello World"); //automatically ends the request
// })
// app.listen(3002);