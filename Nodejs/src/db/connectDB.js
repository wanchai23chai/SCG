import mongoose from 'mongoose'

const dbUrl = 'mongodb://mongodb:27017/test'

function connectDB() {
  mongoose.connect(dbUrl, {
    useNewUrlParser: true
  });
  mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
  mongoose.connection.on('connected', function () {
    console.log('connected db: success ')
  });
}

module.exports = connectDB