import http from 'http'
import { Server as SocketServer } from 'socket.io'
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from '../../common/socket-types'

const SERVER_OPTIONS = {
  cors: {
    origin: '*',
  },
}

export const createSocketServer = (httpServer: http.Server) => {
  const socketServer = new SocketServer<
    ClientToServerEvents,
    ServerToClientEvents
  >(httpServer, SERVER_OPTIONS)

  socketServer.on('connection', (socket) => {
    socket.on('message', (message) => {
      socket.emit(
        'message',
        `We got your ${message} at ${new Date().toISOString()}`,
      )
    })
    socket.on('error', (error) => {
      console.error('socket error', error)
    })
  })

  return socketServer
}
