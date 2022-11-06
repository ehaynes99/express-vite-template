import express from 'express'
import http from 'http'
import morgan from 'morgan'
import { apiRouter } from './api/api-router'
import { environment, isDevelopment } from './environment'
import { createSocketServer } from './socket/create-socket-server'

const app = express()
const httpServer = http.createServer(app)
const _socketServer = createSocketServer(httpServer)

if (isDevelopment) {
  app.use(morgan('dev'))
}
app.use(express.json())

app.use('/api', apiRouter)

const port = Number(process.env.PORT) || 3001
httpServer.listen(port, '0.0.0.0', () => {
  console.log('***** listening on:', port, 'environment', environment)
})
