let express = require('express')
let app = express()

app.get('/api/timestamp/', (req, res) => {
  
})

app.get('[project_url]/api/timestamp/:date_string?', (req, res) => {
  //Check for length of date string
  let dateString  = req.query.date_string
  if (dateString.length == 0){
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