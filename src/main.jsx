import React from 'react'
import ReactDOM from 'react-dom/client' //specific react integration with document object model -> HTML through JavaScript -> React on Web
import { App } from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
