import { PORT } from './config/index'
import router from './router'
import express from 'express'
import cors from 'cors'
import https from 'https'
import path from 'path'
import fs from 'fs'

const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, '..', '..', '/build')))
app.use(router)



const keys = {
  key: fs.readFileSync(path.join(__dirname, 'cert', 'localhost+1-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert', 'localhost+1.pem'))
}


const port = PORT || 5001
https.createServer(keys, app).listen(port, () => console.log(`Running on port ${port}`))