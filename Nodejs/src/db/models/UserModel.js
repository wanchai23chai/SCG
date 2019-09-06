import mongoose from 'mongoose'
import dbConnect from '../connectDB'
dbConnect()
const Schema = mongoose.Schema;
let UsersSchema = new Schema({
    firstname: {type: String, required: true, max: 100},
    lastname: {type: String, required: true, max: 100},
});


// Export the model
module.exports = mongoose.model('Users', UsersSchema);