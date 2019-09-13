import express from 'express'
import router from './routes/routes'
import bodyParser from 'body-parser' 
import path from 'path'
import dotenv from 'dotenv'
dotenv.config({path: './envs/dev/.env'})
const app = express()
app.use(bodyParser.json())
app.use((req,res,next)=>{
  console.log(`${req.method} :  ${req.url} `)
  next()
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', router)
app.use('/',(req,res,next)=>{
  res.json({'message':'service online'})
})
// app.use(express.static(path.join('../react-portfolio', 'build')));
// app.get('/', function(req, res) {
//   res.sendFile(path.join('../react-portfolio', 'build', 'index.html'));
// });


module.exports = app