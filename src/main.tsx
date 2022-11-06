import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './ui/App'
import './ui/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)