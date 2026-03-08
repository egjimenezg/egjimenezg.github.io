import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/epilogue/400.css'
import '@fontsource/epilogue/500.css'
import '@fontsource/epilogue/600.css'
import '@fontsource/epilogue/700.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
