let express = require('express')
let app = express()

app.get('/api/timestamp/', (req, res) => {
  
})

app.get('[project_url]/api/timestamp/:date_string?', (req, res) => {
  //Check for length of date string
  if (!req.query.date_string){
      //Empty string 
      let newDate = new Date()
      let unixDate = Math.round((new Date()).getTime() / 1000);           
      let utcDate =  new Date().toUTCString() ;       
      res.json({"unix": unixDate, "utc": utcDate}) 
  }
  //let dateString = new Date(req.query.date_string)
  
  if (new Date(req.query.date_string)){ 
        if (isNaN(req.query.date_string.getTime())) {  
           res.json({"error" : "Invalid Date" })
        } else { 
            //down.innerHTML = "Valid Date."; 
            let unixDate = Math.round((req.query.date_string.getTime() / 1000))
            let utcDate = req.query.date_string.toUTCString()
            res.json({"unix": unixDate, "utc": utcDate})         
        } 
   } 
})