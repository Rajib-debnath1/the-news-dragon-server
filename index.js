const express = require('express');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 5000;

const cetegories = require('./data/cetegories.json')

app.use(cors());


app.get('/', (req, res) =>{
    res.send('Dragon is Running')
})

app.get('/cetegories' , (req,res)=>{
    res.send(cetegories)
})


app.listen(port, () => {
    console.log(`Dragon api is running on port ${port}`)
  })

