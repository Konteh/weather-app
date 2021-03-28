const express = require("express");

const app = express();

app.get("/" ,(req,res)=>{
    res.send("Server running")
})


app.listen(3000, ()=>{
    console.log("Listening from port 3000")
})