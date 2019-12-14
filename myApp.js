let express = require('express')
let app = express()

app.get('/api/timestamp/', (req, res) => {
  
})

app.get('[project_url]/api/timestamp/:date_string?', (req, res) => {
  //Check for length of date string
  if (req.query.date_string.length == 0){
      //Empty string 
      let newDate = new Date()
      let unixDate = Math.round((new Date()).getTime() / 1000);           
      let utcDate =  new Date().toUTCString() ;       
      res.json({"unix": unixDate, "utc": utcDate}) 
  }
  let dateString = new Date(req.query.date_string)
  
  if (Object.prototype.toString.call(dateString) === "[object Date]"){ 
        if (isNaN(dateString.getTime())) {  
           res.json({"error" : "Invalid Date" })
        } else { 
            //down.innerHTML = "Valid Date."; 
            let unixDate = Math.round((dateString.getTime() / 1000); 
            let utcDate = dateString.toUTCString()
            res.json({"unix": unixDate, "utc": utcDate})         
        } 
   } 
})