import React from 'react'
import ReactDOM from 'react-dom/client'
// Se quita la extensión .tsx para mejorar la resolución del bundler
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)