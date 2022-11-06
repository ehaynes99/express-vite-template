import express from 'express'
import morgan from 'morgan'

import { HelloMessage } from '../common/hello.js'
import { environment } from './environment.js'

const app = express()
app.use(morgan('combined'))
app.use(express.json())

const port = Number(process.env.PORT) || 3001

app.get<any, any, HelloMessage>('/hello', (req, res) => {
  res.status(200).json({ body: 'hello?' })
})

app.listen(port, '0.0.0.0', () => {
  console.log('***** listening on:', port, 'environment', environment)
})
