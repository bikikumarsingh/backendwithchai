const express = require('express')
require('dotenv').config()

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('bikikumarsingh')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at our website</h2>')
})
app.get('/youtube',(req,res)=>{
    res.send('code with chai')
})

/** 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
*/
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
