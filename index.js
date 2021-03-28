const { response } = require("express");
const express = require("express");
const app = express();
const https = require("https");
const { url } = require("inspector");

app.get("/" ,(req,res)=>{

    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=bfdeecfeeca4d5e7813fded2fd430cc9&units=metric";
    https.get(url, (response)=>{
        console.log(response.statusCode);

        response.on("data",function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp 
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.write("<p> The weather description is " + weatherDescription + "</p>")
            res.write("<h1> The temperature in London is " + temp + " degree celcius</h1>")
            res.write("<img src="+ imageURL + ">")
            res.send
        })
    })
  
})


app.listen(3000, ()=>{
    console.log("Listening from port 3000")
})