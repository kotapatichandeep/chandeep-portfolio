import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/outfit'; // Import custom font
import './styles/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
