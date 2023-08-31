const connectToMongo = require("./database/db.js")
const express = require("express");
connectToMongo;  
const router = require("./routes/route.js")
const cors = require("cors");
const bodyParser = require("body-parser");



const app = express();
//express server running on port no 8000
const PORT = 8000;
app.use(cors()); 
//to use body parser for post APIs
app.use(bodyParser.json({extended: true})); 
//to decode the URL 
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',router);

//to make express server
app.listen(PORT,()=>{
  console.log(`server is running successfully on port ${PORT}`);
});