const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, response){
  response.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res){
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var result = n1/(n2*n2);
  // console.log(req.body.num1);
  res.send("The answer is " + result);
});

// app.get("/about", function(req, response){
//   response.send("<h1>Vishisht Chhabra</h1><p>This is pretty hard to understand</p>");
// });
//
// app.get("/shapeai", function(req, response){
//   response.send("<h1>ShapeAI</h1><p>This is pretty hard to understand</p>");
// });

app.listen(3000, function() {
  console.log("Server has started on Port:3000");
});
