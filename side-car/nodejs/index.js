const express = require('express')
const app = express()
const port = 3000

var os = require("os");
var hostname = os.hostname();

var fs = require('fs')

var morgan = require('morgan')

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(__dirname + '/logs/access.log', {flags: 'a'})

// setup the logger
app.use(morgan('combined', {stream: accessLogStream}))

app.get('/', (req, res) => res.send('Hello World! <h1 style="color:red;">Demo App RED Version<h1> <br>'))

app.get('/api',(req,res)=>{
    res.json({title:"api",message:"root", host:hostname});
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
