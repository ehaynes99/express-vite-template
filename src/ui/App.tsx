import { useEffect, useState } from 'react'
import { HelloMessage, sayHello } from '../common/hello'
import './App.scss'
import { SocketTest } from './components/SocketTest'

let renderCount = 0
let loadCount = 0

function App() {
  const [message, setMessage] = useState<HelloMessage>()
  useEffect(() => {
    console.log('***** ++loadCount:', ++loadCount)
    fetch('/api/hello?name=frontend')
      .then((response) => response.json())
      .then((message) => setMessage(message))
      .catch((error) => setMessage({ body: `ERROR: ${error.message}` }))
  }, [])

  console.log('***** ++renderCount:', ++renderCount)
  return (
    <div className="App">
      <h4>Server Content: {message?.body}</h4>
      <p>local content: {sayHello('world').body}</p>
      <SocketTest />
    </div>
  )
}

export default App
