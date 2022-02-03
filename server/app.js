

// Importing the express 
const express = require("express");
const app = express();

// Importing dotnet `Storing configuration in the env separate from code `
const dotenv = require('dotenv')

dotenv.config({path:'./config.env'}); /// IMPORTING DOTENV

require('./Db/conn') /// Mongodb importing from db file


app.use(express.json()) // using it to understand json formate i.e. its middleware
app.use(require('./router/auth')) // router file link i.e. its middleware

const User = require('./model/userSchema') // Importing User Schema



//Displaying the page at 3000 port 

const port = process.env.PORT

app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})



