let express = require('express')
let app = express()

app.get('/api/timestamp/', (req, res) => {
  
})

app.get('[project_url]/api/timestamp/:date_string?', (req, res) => {
  let dateString = req.query.date_string
  if (!dateString){
    dateString = new Date()
    
    let unixDate = dateString.valueOf()
    let utcDate = dateString.toUTCString()
    
    res.json({"unix": unixDate, "utc": utcDate})
  }
  
  let newDate = new Date(dateString)
  
  if (Date.parse(newDate)){
    let unixDate = newDate.valueOf()
    let utcDate = newDate.toUTCString()
    
    res.json({"unix": unixDate, "utc": utcDate})
  }else{
    res.json({"error" : "Invalid Date" } )          
  }
})