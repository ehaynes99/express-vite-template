import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from '../../common/socket-types'

type AppSocket = Socket<ServerToClientEvents, ClientToServerEvents>
export const SocketTest = () => {
  const [socket, setSocket] = useState<AppSocket>()

  const [message, setMessage] = useState<string>('')

  useEffect((): any => {
    const socket: AppSocket = io(`ws://${window.location.host}`)
    // const socket: AppSocket = io(`ws://localhost:3001`)

    socket.on('connect_error', (error) => {
      console.error('connect error', error)
    })
    // log socket connection
    socket.on('connect', () => {
      console.log('SOCKET CONNECTED!', socket.id)
      setSocket(socket)
    })

    socket.on('message', (message: string) => {
      console.log('***** message:', message)
      setMessage(message)
    })

    if (socket) return () => socket.disconnect()
  }, [])

  const inputHandler = useInput()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (socket) {
      socket.emit('message', inputHandler.value)
      inputHandler.setValue('')
    }
  }

  return (
    <div className="socket-test">
      <h4>Last Message</h4>
      <pre>{JSON.stringify(message, null, 2)}</pre>
      <form onSubmit={handleSubmit}>
        <label>send message</label>
        <input value={inputHandler.value} onChange={inputHandler.onChange} />
      </form>
    </div>
  )
}

const useInput = (defaultText = '') => {
  const [value, setValue] = useState(defaultText)

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }, [])

  return {
    value,
    onChange,
    setValue,
  }
}
