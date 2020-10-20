var express = require('express'),
    app = express();

 var request = require("request");


// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
request({


  //jar:true
  
        
}, function(error, response, body) {
  console.log(body);
      });




var server = app.listen(8082, function () {
   console.log('http://%s:%s', server.address().address, server.address().port);
});