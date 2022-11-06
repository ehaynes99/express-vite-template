import express from 'express'
import morgan from 'morgan'

import { HelloMessage, sayHello } from '../common/hello'
import { environment, isDevelopment } from './environment'

const app = express()
if (isDevelopment) {
  app.use(morgan('dev'))
}
app.use(express.json())

const port = Number(process.env.PORT) || 3001

app.get<any, any, HelloMessage, any, { name: string }>('/hello', (req, res) => {
  const { name } = req.query
  res.status(200).json(sayHello(name))
})

app.listen(port, '0.0.0.0', () => {
  console.log('***** listening on:', port, 'environment', environment)
})
