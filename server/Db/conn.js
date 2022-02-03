
///Importing mongoose
const mongo = require('mongoose');


// Connecting with mongobd through website

const DB = process.env.DATABASE 

mongo.connect(DB).then(()=>{
    console.log('Connection successful......')
})
.catch((err)=>console.log('No Connection'));
