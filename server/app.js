const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', function(request , response){
    let req = request.query.name;
    let date ;


    if(req === 'tu'){ date = new Date()}
    else {
        date =  'Test'
    }
    response.send(date)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})