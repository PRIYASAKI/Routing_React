var express = require('express');
var app = express();
var routing=require('./router.js');
app.use('/',routing);
app.listen(3080);
console.log("Server is listening at port 3080");