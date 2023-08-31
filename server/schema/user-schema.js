const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String
})




autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'crud-app');

const user = mongoose.model('crud-app', userSchema);
 

module.exports=user