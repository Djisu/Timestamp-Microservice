// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


app.get('[project_url]/api/timestamp/:date_string?', (req, res) => {
  //Check for length of date string
  let dateString  = req.params.date_string
  if (/\d{5,}/.test(dateString)){
      //Empty string 
      let newDate = new Date()
      //let unixDate = newDate.getTime() * 1           
      //let utcDate =  newDate.toUTCString() ;       
      res.json({"unix": newDate.getTime(), "utc": newDate.toUTCString()}) 
  }
  
  if (new Date(dateString)){ 
        //let unixDate = req.query.date_string.getTime() * 1    
        //let utcDate = req.query.date_string.toUTCString()
        res.json({"unix": dateString.getTime() , "utc": dateString.toUTCString()})      
  }else{
        res.json({"error" : "Invalid Date" })  
  }    
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});