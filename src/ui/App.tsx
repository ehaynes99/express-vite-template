import { useEffect, useState } from 'react'
import { HelloMessage, sayHello } from '../common/hello'
import './App.scss'

function App() {
  const [message, setMessage] = useState<HelloMessage>()
  useEffect(() => {
    fetch('/api/hello?name=frontend')
      .then((response) => response.json())
      .then((message) => setMessage(message))
      .catch((error) => setMessage({ body: `ERROR: ${error.message}` }))
  }, [])

  return (
    <div className="App">
      <h4>Server Content: {message?.body}</h4>
      <p>local content: {sayHello('world').body}</p>
    </div>
  )
}

export default App
