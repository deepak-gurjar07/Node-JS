// setup on 17/01/2024

// npm init -y or npm init and then choose your preference for package.json

//npm install express or npm i express

// first app on 18/01/2024
const express = require("express")
const app = express()


app.get('/', (req, res )=>{
    res.send("Working Fine")
} )

app.get('/project',(req, res)=>{
    res.send("This is Project page")
})

//the '/payment route on the above will run only on "http://localhost:4000/payment/" because when it will get first route with /payment it will only send it and stop till futher task done

app.get('/payment', (req,res)=>{
    res.send(`<h1 style= "color: Orange;">This is Payment</h1>`)
})

app.get('/payment', (req,res)=>{
    res.send(`<h1 style= "color: red;">This is Payment</h1>`)
})

// app.get('/login/abc/1234',(req , res)=>{
//     res.send("WELCOME")
// })

app.get('/login/:username/:password',(req , res)=>{
    console.log(req.params)
    // const user = req.params.username
    // res.send(`<h3 style = "color: SlateBlue;">WELCOME ${user}</h3>
    //         <p style = "color: DodgerBlue;">Welcome to Your Login Page ${user} </p>
    //     `)
    // or
    const{username,password} = req.params //this username is same as :username
    res.send(`<h3 style = "color: SlateBlue;">WELCOME ${username}</h3>
            <p style = "color: DodgerBlue;">Welcome to Your Login Page ${username} and your password is ${password}</p>
        `)

    // res.json({username, password})
})

app.get('/getData',(req, res)=>{
    console.log(req.query)
    res.send("OK")
})

app.get('/*', (req, res)=>{
    res.send(`<h1 style= "color: red;">404 Page Not Found</h1><p style= "color: red;">Bhai kar kya raha hai tu</p>`)
})

const port = 4000

app.listen(port,()=>{
    console.log("Server Running at port ", port)
})

// app.listen(4000) 