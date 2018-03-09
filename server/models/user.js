const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userAccountSchema = new Schema({
    username : String,
    password : String,
    firstName : String,
    lastName : String,
    confirm : String,
    name: String,
    shortname: String,
    reknown: String,
    bio: String,
    posts: [String],
    postsDates: [String]

})

module.exports = mongoose.model('userAccount',userAccountSchema,'userAccounts')
