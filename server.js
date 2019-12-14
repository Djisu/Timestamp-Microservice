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


app.get("/api/timestamp/", (req, res) => {
  res.json({ unix: Date.now(), utc: Date() });
});


app.get("/api/timestamp/:date_string?", (req, res) => {
  //Check for length of date string
  let dateString  = req.params.date_string
  if (/\d{5,}/.test(dateString)) {
    dateInt = parseInt(dateString);
    //Date regards numbers as unix timestamps, strings are processed differently
    res.json({ unix: dateString, utc: new Date(dateInt).toUTCString() });
  }
  
  let newDObject = new Date(dateString);
  
  if (newDObject.toString() === "Invalid Date"){ 
      res.json({"error" : "Invalid Date" })  
     
  }else{
        var dateInt = parseInt(dateString);
        //let unixDate = req.query.date_string.getTime() * 1    
        //let utcDate = req.query.date_string.toUTCString()
        res.json({ "unix": newDObject.valueOf() , "utc": newDObject.toUTCString()} )        
  }    
})




// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});