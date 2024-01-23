// EJS javascript template

const express = require('express')
const app = express()

app.set("view engine","ejs")

app.get('/', (req, res)=>{
    res.render('home')
})

app.get('/payment',(req, res)=>{
    res.render('payment')
})

const todos = ['Exercise','Collage','cricket','Coding','exercise','sleep']


app.get('/todo',(req,res)=>{
    res.render('abc',{todos})
})

app.get('/login/:username/:password',(req,res)=>{
    const user = req.params.username
    res.send(`welcome ${user}`)
})

app.get('/search',(req, res)=>{
    console.log(req.query)
    res.send("OK")
})
// http://localhost:5000/search?name=deepak&age=19 

app.get('/*',(req,res)=>{
    res.send(`<h2>404 Page Not Found</h2><p>Bhai kar kya raha hai tu</p>`)
})

port = 5000

app.listen(port,()=>{
    console.log(`App is Running and Listening at port ${port}`)
})