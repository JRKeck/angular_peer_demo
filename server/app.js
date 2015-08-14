var express = require('express');
var index = require('./routes/index');
var path = require('path');
var app = express();

app.use('/', index);

app.set("port", (process.env.PORT || 5000));

app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});

module.exports = app;

