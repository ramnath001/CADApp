var express = require('express'),
    app = express();

 var request = require("request");


// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
request({
 // url:"http://sv2lxfasgwdi01.corp.equinix.com:9009/cad/v1/Marketplace/jobs",
  url:  "http://diapi.equinix.com/cad/logout",
  headers : {"auth-token":"ZLoZwNsHJnPznoi8TmweC0ATGuSG"}
  //jar:true
  
        
}, function(error, response, body) {
  console.log(body);
      });




var server = app.listen(8082, function () {
   console.log('http://%s:%s', server.address().address, server.address().port);
});