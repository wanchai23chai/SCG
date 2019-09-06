import express from 'express'
import router from './src/routes/routes'
import bodyParser from 'body-parser' 
import path from 'path'
import dotenv from 'dotenv'
dotenv.config({path: './envs/dev/.env'})
const app = express()

app.use(express.static(path.join('../react-portfolio', 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join('../react-portfolio', 'build', 'index.html'));
});
app.use(bodyParser.json())
app.use((req,res,next)=>{
  console.log(`${req.method} :  ${req.url} `)
  next()
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', router)

module.exports = app