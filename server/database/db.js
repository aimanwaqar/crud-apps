const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/local";
mongoose.set('strictQuery',true);

const connectToMongo = mongoose.connect(mongoURI,{
  useUnifiedTopology: true,
  useNewUrlParser: true,
  family : 4
});
       
if(connectToMongo){
        console.log("connected to Mongo succesfully");
       }
        


module.exports = connectToMongo;
