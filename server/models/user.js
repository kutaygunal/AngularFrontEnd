const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userAccountSchema = new Schema({
    username : String,
    password : String,
    firstName : String,
    lastName : String
})


module.exports = mongoose.model('userAccount',userAccountSchema,'userAccounts')
