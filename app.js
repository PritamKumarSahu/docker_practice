const express = require('express')
const app = express();

app.get('/', (req,res,next)=> {
    res.json({
        "message": 'Hello world jenkins !!'
    })
})

app.listen(3000, ()=> {
    console.log("app is listning in port 3000")
})
